exports.min = function min(array) {
  if (!array || !array.length) return 0;

  const temp = array;

  let min = temp.reduce((a, b) => {
    return Math.min(a, b);
  });
  return min;
};

exports.max = function max(array) {
  if (!array || !array.length) return 0;

  const temp = array;

  let max = temp.reduce((a, b) => {
    return Math.max(a, b);
  });
  return max;
};

exports.avg = function avg(array) {
  if (!array || !array.length) return 0;

  return array.reduce((accum, elem) => accum + elem) / array.length;
};
