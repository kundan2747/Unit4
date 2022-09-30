function filterArr(arr) {
  var arrfil = arr.filter(function (ele) {
    return ele.place == "Banglore";
  });
  var ans = arrfil.map(function (ele) {
    return ele.firstName + " " + ele.lastName;
  });
  console.log(ans);
}
let users = [
  { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
  { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
  { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];
filterArr(users);
