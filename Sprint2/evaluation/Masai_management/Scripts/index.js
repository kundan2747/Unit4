// Write All Home  Page Script Here
var moviesArr = JSON.parse(localStorage.getItem("movie-list")) || [];
document.querySelector("form").addEventListener("submit", addRow);

function addRow() {
  event.preventDefault();
  var obj = {
    name: document.getElementById("name").value,
    mainActor: document.getElementById("mainActor").value,
    desc: document.getElementById("desc").value,
    release: document.getElementById("release").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
  };
  moviesArr.push(obj);
  localStorage.setItem("movie-list", JSON.stringify(moviesArr));
}
