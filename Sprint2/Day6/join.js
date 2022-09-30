function join(arr) {

  var ans = arr.map(function (ele) {
    return ele.firstName + " " + ele.lastName;
  });
  console.log(ans);
}
let users = [
  { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
  { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
  { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];
join(users);
