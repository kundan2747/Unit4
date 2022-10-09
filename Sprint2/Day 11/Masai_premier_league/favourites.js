// write js code here corresponding to favourites.html
favouriteArr = JSON.parse(localStorage.getItem("favourites")) || [];
display(favouriteArr);
function display(favouriteArr) {
  document.querySelector("tbody").innerText = "";
  favouriteArr.map(function (ele, i) {
    var tr = document.createElement("tr");
    var matchno = document.createElement("td");
    var teamA = document.createElement("td");
    var teamB = document.createElement("td");
    var date = document.createElement("td");
    var venue = document.createElement("td");
    var removefav = document.createElement("td");
    removefav.innerText = "Remove ";
    removefav.style.color = "green";
    removefav.style.cursor = "pointer";

    matchno.innerText = ele.matchNum;
    teamA.innerText = ele.teamA;
    teamB.innerText = ele.teamB;
    date.innerText = ele.date;
    venue.innerText = ele.venue;

    tr.append(matchno, teamA, teamB, date, venue, removefav);
    document.querySelector("tbody").append(tr);

    removefav.addEventListener("click", function () {
      del(i);
    });
  });
}
function del(i) {
  favouriteArr.splice(i, 1);
  localStorage.setItem("favourites", JSON.stringify(favouriteArr));

  display(JSON.parse(localStorage.getItem("favourites")));
}
