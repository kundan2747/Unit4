function sumOfOdd(arr) {
  var oddArr = arr.filter(function (ele) {
    return ele % 3 == 0;
  });
  var ans = oddArr.reduce(function (acc, ele) {
    return acc + ele ** 3;
  }, 0);
  console.log(ans);
}
var arr = [1, 2, 3, 4, 5, 6];
sumOfOdd(arr);
