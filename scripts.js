function openNav() {
  document.getElementById("sidebar").style.width= "250px";
  document.getElementByID("content").style.marginLeft= "250px";
}

function closeNav() {
  document.getElementByID("sidebar").style.width= "0";
  document.getElementByID("content").style.marginLeft= "0";
}
