// Write All `All Movies`  Page Script Here
var moviesArr = JSON.parse(localStorage.getItem("movie-list")) || [];
var bookingArr = JSON.parse(localStorage.getItem("buy-list")) || [];
display(moviesArr);
document.getElementById("movie-count").innerText = moviesArr.length;

function display(moviesArr) {
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  moviesArr.map(function (ele, indx) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    td1.innerText = ele.name;
    td2.innerText = ele.mainActor;
    td3.innerText = ele.desc;
    td4.innerText = ele.release;
    td5.innerText = ele.category;
    td6.innerText = ele.price;
    td7.innerText = "Buy";
    td7.style.backgroundColor = "green";
    td7.style.color = "white";
    td7.addEventListener("click", function () {
      delRow(indx);
    });
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    tbody.append(tr);
  });
}

function delRow(i) {
  bookingArr.push(moviesArr[i]);
  localStorage.setItem("buy-list", JSON.stringify(bookingArr));
  moviesArr.splice(i, 1);
  localStorage.setItem("movie-list", JSON.stringify(moviesArr));
  display(moviesArr);
}

document.getElementById("filter").setAttribute("onchange", "handelFilter()");

function handelFilter() {
  console.log("change");
  var cat = document.getElementById("filter").value;
  var filteredArr = moviesArr.filter(function (ele) {
    if (cat == "") return true;
    return ele.category == cat;
  });
  display(filteredArr);
  document.getElementById("movie-count").innerText = filteredArr.length;
}
