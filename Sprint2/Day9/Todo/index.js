document.querySelector("form").addEventListener("submit", addRow);

var todoArr = JSON.parse(localStorage.getItem("todo")) || [];
displayTodo(todoArr);

function addRow() {
  event.preventDefault();
  var task = document.getElementById("task").value;
  var priority = document.getElementById("priority").value;
  var obj = { task: task, priority: priority };
  todoArr.push(obj);
  localStorage.setItem("todo", JSON.stringify(todoArr));
  displayTodo(JSON.parse(localStorage.getItem("todo")));
}
function displayTodo(arr) {
  document.querySelector("tbody").innerHTML = "";
  arr.map(function (ele, i) {
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.innerText = ele.task;
    td2.innerText = ele.priority;
    td3.innerText = "Delete";

    if (ele.priority == "High") {
      td2.style.backgroundColor = "red";
    } else {
      td2.style.backgroundColor = "green";
    }
    row.append(td1, td2, td3);
    document.querySelector("tbody").append(row);

    td3.addEventListener("click", del(i));
  });
}
function del(i) {
  return function () {
    var arr = JSON.parse(localStorage.getItem("todo"));
    arr.splice(i, 1);
    localStorage.setItem("todo", JSON.stringify(arr));
    displayTodo(arr);
  };
}
