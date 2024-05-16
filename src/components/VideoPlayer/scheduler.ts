type Player = {
  rect: DOMRectReadOnly;
  setPlaying: (playing: boolean) => void;
  visiblePercentage: number;
};
const DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE = 0.5;

class PlayerScheduler {
  private playerMap: Map<string, Player> = new Map();
  private currentPlayer: Player | null = null;
  private frozen: boolean = false;

  constructor() {
    this.playerMap = new Map();
    this.currentPlayer = null;
    this.frozen = false;
  }
  setPlayer(id: string, player: Player) {
    this.playerMap.set(id, player);
  }
  removePlayer(id: string) {
    this.playerMap.delete(id);
  }
  play() {
    if (this.frozen) return;
    let maxVisiblePercentage = 0;
    this.playerMap.forEach(player => {
      player.setPlaying(false);
      if (player.visiblePercentage > maxVisiblePercentage) {
        maxVisiblePercentage = player.visiblePercentage;
      }
    });
    if (maxVisiblePercentage > DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE) {
      const maxVisiblePercentagePlayer: Player[] = [];
      this.playerMap.forEach(player => {
        if (player.visiblePercentage === maxVisiblePercentage) {
          maxVisiblePercentagePlayer.push(player);
        }
      });
      const minY = Math.min(
        ...maxVisiblePercentagePlayer.map(player => player.rect.y),
      );
      const minYPlayers = maxVisiblePercentagePlayer.filter(
        player => player.rect.y === minY,
      );

      const player = minYPlayers.sort((a, b) => a.rect.x - b.rect.x)[0];
      if (player) {
        this.currentPlayer?.setPlaying(false);
        this.currentPlayer = player;
        player.setPlaying(true);
      }
    }
  }
  stop() {
    this.frozen = true;
    this.playerMap.forEach(player => {
      player?.setPlaying(false);
    });
  }
  resume() {
    this.frozen = false;
    this.play();
  }
}

export const playerScheduler = new PlayerScheduler();
