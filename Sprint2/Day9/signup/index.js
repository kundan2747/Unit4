document.querySelector(".signUp").addEventListener("click", createUser);
if (localStorage.getItem("users") == null) {
  var usersArr = [];
} else {
  var usersArr = JSON.parse(localStorage.getItem("users"));
}
function createUser() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var userObj = { email: email, password: password };
  usersArr.push(userObj);
  localStorage.setItem("users", JSON.stringify(usersArr));
  alert("sign up successfully");
}
document.querySelector(".login").addEventListener("click", loginUser);
function loginUser() {
  event.preventDefault();
  var arr = JSON.parse(localStorage.getItem("users"));
  console.log(arr);
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (check(email, password, arr)) alert("Login Successful");
  else alert("Wrong credentials");
}

function check(em, pass, arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].email, arr[i].password);
    if (arr[i].email == em) {
      if (arr[i].password == pass) return true;
      else return false;
    }
  }
  return false;
}
