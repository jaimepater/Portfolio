const getPosition = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x: number
) => {
  const slope = (y1 - y2) / (x1 - x2);
  const line = slope * (x - x1) + y1;
  let result = x < x2 ? y2 : line;
  result = x > x1 ? y1 : result;
  return result;
};

export default getPosition;
