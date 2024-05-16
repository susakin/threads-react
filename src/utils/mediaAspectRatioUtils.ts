import { ViewportDimensions } from '@hooks/useViewport';
import { MediaDimensions } from '@typings/index';

export function getMediaAspectRatio({
  mediaHeight,
  mediaWidth,
}: MediaDimensions) {
  const a = mediaWidth / mediaHeight;
  const b = 3 / 4;
  const c = 4 / 3;
  if (a < b) return b;
  return a > c ? c : a;
}

function h(aspectRatio: number) {
  return Math.abs(aspectRatio - 3 / 4) < 0.01;
}

function i(aspectRatio: number) {
  return Math.abs(aspectRatio - 4 / 3) < 0.01;
}

export function getMediaHeight(aspectRatioA: number, aspectRatioB: number) {
  if (i(aspectRatioA) && i(aspectRatioB)) return 184;
  if (
    (h(aspectRatioA) && i(aspectRatioB)) ||
    (i(aspectRatioA) && h(aspectRatioB))
  )
    return 235;
  return aspectRatioA === 1 && aspectRatioB === 1 ? 245 : 280;
}

export function getMediaWidth(height: number, aspectRatio: number) {
  return Math.floor(height * aspectRatio);
}

export const MediaAttachmentConstants = {
  MAX_MEDIA_HEIGHT: 430,
  MAX_MEDIA_WIDTH: 572,
};

export const getAspectRatioInViewer = function ({
  mediaHeight,
  mediaWidth,
  viewportHeight,
  viewportWidth,
}: ViewportDimensions & MediaDimensions) {
  const aspectRatio = mediaWidth / mediaHeight;
  const viewportRate = viewportWidth / viewportHeight;

  return Object.assign(
    {
      aspectRatio,
    },
    aspectRatio > viewportRate ? { width: viewportWidth } : { height: '100%' },
  );
};

export function getAspectRatioInSingleMedia({
  mediaWidth,
  mediaHeight,
}: MediaDimensions) {
  const style = {
    aspectRatio: mediaWidth / mediaHeight,
    maxHeight: MediaAttachmentConstants.MAX_MEDIA_HEIGHT,
  };
  return style;
}
