// write js code here corresponding to matches.html
var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];
var favouriteArr = JSON.parse(localStorage.getItem("favourites")) || [];

function filterVenue() {
  var selected = document.getElementById("filterVenue").value;
  var filterArr = matchArr.filter(function (ele) {
    if (selected == "none") return true;
    return selected == ele.venue;
  });
  display(filterArr);
}

display(matchArr);

function display(matchArr) {
  document.querySelector("tbody").innerText = "";
  matchArr.map(function (ele) {
    var tr = document.createElement("tr");
    var matchno = document.createElement("td");
    var teamA = document.createElement("td");
    var teamB = document.createElement("td");
    var date = document.createElement("td");
    var venue = document.createElement("td");
    var favourite = document.createElement("td");
    favourite.innerText = "Favorite";
    favourite.style.color = "green";
    favourite.style.cursor = "pointer";

    matchno.innerText = ele.matchNum;
    teamA.innerText = ele.teamA;
    teamB.innerText = ele.teamB;
    date.innerText = ele.date;
    venue.innerText = ele.venue;

    tr.append(matchno, teamA, teamB, date, venue, favourite);
    document.querySelector("tbody").append(tr);

    favourite.addEventListener("click", function () {
      addfavourite(ele);
    });
  });
}
function addfavourite(obj) {
  favouriteArr.push(obj);
  localStorage.setItem("favourites", JSON.stringify(favouriteArr));
}
