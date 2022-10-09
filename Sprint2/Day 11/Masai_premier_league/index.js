// write js code here corresponding to index.html
// You should add submit event on the form
matchArr = JSON.parse(localStorage.getItem("schedule")) || [];
document.querySelector("form").addEventListener("submit", addRow);
function addRow() {
  event.preventDefault();
  obj = {
    matchNum: document.getElementById("matchNum").value,
    teamA: document.getElementById("teamA").value,
    teamB: document.getElementById("teamB").value,
    date: document.getElementById("date").value,
    venue: document.getElementById("venue").value,
  };
  matchArr.push(obj);
  localStorage.setItem("schedule", JSON.stringify(matchArr));
}
