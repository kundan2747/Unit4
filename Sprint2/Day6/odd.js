function odd(arr) {
  var ans = arr.filter(function (ele) {
    return ele % 2 != 0;
  });
  console.log(ans);
}
var arr = [1, 2, 3];
odd(arr);
