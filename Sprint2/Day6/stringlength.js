function square(arr) {
  var ans = arr.map(function (ele) {
    return ele.length;
  });
  console.log(ans);
}
var arr = ["apple", "windows", "ubuntu"];
square(arr);
