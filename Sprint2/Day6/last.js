function square(arr) {
  var ans = arr.filter(function (ele) {
    return ele[0] == "a" || ele[ele.length - 1] == "a";
  });
  console.log(ans);
}
var arr = ["assignment", "problem", "media", "upload"];
square(arr);
