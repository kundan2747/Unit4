document.querySelector("form").addEventListener("submit", createRow);

function createRow() {
  event.preventDefault();
  var compname = document.getElementById("compName").value;
  var listedExchange = document.getElementById("listedExchange").value;
  var industry = document.getElementById("industry").value;
  var stockPrice = document.getElementById("stockPrice").value;
  var quantity = document.getElementById("quantity").value;
  var type = document.getElementById("type").value;

  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  td1.innerText = compname;
  td2.innerText = listedExchange;
  td3.innerText = industry;
  td4.innerText = stockPrice;
  td5.innerText = quantity;
  td6.innerText = type;
  td7.innerText = parseInt(quantity) * parseInt(stockPrice);
  td8.innerText = "Date";
  td9.innerText = "sell";
  td9.style.backgroundColor = "red";
  td9.addEventListener("click", deleteRow);

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
  document.querySelector("tbody").append(tr);
  var initial = document.getElementById("noOfStock").innerText;
  document.getElementById("noOfStock").innerText = parseInt(initial) + 1;
  var initial = document.getElementById("totalPortfolio").innerText;
  document.getElementById("totalPortfolio").innerText =
    parseInt(initial) + parseInt(quantity) * parseInt(stockPrice);
}
function deleteRow() {
  var stockPrice = document.getElementById("stockPrice").value;
  var quantity = document.getElementById("quantity").value;
  event.target.parentNode.remove();
  var initial = document.getElementById("noOfStock").innerText;
  document.getElementById("noOfStock").innerText = parseInt(initial) - 1;
  var initial = document.getElementById("totalPortfolio").innerText;
  document.getElementById("totalPortfolio").innerText =
    parseInt(initial) - parseInt(quantity) * parseInt(stockPrice);
}
