function square(arr) {
  var squareArr = arr.map(function (ele) {
    return ele * ele;
  });
  console.log(squareArr);
}
var arr = [1, 2, 3, 4, 5];
square(arr);
