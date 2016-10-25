function strip(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent||tmp.innerText;
}

var tbl = document.getElementById('books');
var rows = tbl.rows;
var myTotal = 3, totals = [0, 0, 0];
for (var i = 2; i < myTotal; i++) { 
    for (var j = 1; j < rows.length; j++) {
      var cell = rows[j].cells[i];
      var grandTotal = parseFloat(strip(cell.innerHTML), 10);
      totals[i] += grandTotal;
    }
}

document.getElementById('price').innerHTML =
  "Total Price: $" + totals[2];
