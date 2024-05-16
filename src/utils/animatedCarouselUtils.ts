const carouselGap = 6;

function getPosition(scrollLeft: number, widthArr: number[]) {
  let position,
    width = 0;
  for (let i = 0; i < widthArr.length; i++) {
    width += widthArr[i] + carouselGap;
    position = i;
    if (width > scrollLeft) return position;
  }
  return 0;
}

function getLeft(index: number, widthArr: number[]) {
  return widthArr.slice(0, index).reduce(function (a, b) {
    return a + b + carouselGap;
  }, 0);
}

export function getNextCardPosition(
  scrollLeft: number,
  widthArr: number[],
  dir: 'next' | 'prev',
) {
  scrollLeft = Math.abs(scrollLeft);
  const position = getPosition(scrollLeft, widthArr);
  if (position === 0 && dir === 'prev') return 0;
  if (position === widthArr.length - 1 && dir === 'next')
    return widthArr.length - 1;
  const left = getLeft(position, widthArr);
  const carouselWdith = widthArr[position];
  const scrollLeftGap = scrollLeft - left;
  if (scrollLeftGap > carouselWdith * 0.5 && dir === 'prev') {
    return left;
  }
  return scrollLeftGap > carouselWdith * 0.5 &&
    dir === 'next' &&
    position < widthArr.length - 3
    ? getLeft(position + 2, widthArr)
    : dir === 'prev'
    ? getLeft(position - 1, widthArr)
    : getLeft(position + 1, widthArr);
}
