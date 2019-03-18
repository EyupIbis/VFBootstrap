
function myFunction() {
  var x = document.getElementById("mySelect");
  var i = x.selectedIndex;
  document.getElementById("klantnaam").innerHTML = x.options[i].text;
}