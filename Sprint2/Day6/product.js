function product(arr) {
  var ans = arr.reduce(function (acc, ele) {
    return acc * ele;
  });
  console.log(ans);
}
var arr = [2, 3, 4];
product(arr);
