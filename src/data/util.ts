export const makeArray = (length: number): any[] =>
  new Array(length).fill(null);

export const mapArray = (length: number): number[] =>
  makeArray(length).map((notUsed, index) => index);

export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min);

export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

// makeArray(배열길이) -> 배열 길이만큼 null이로 채워진 배열 반환
// range(min, max)
