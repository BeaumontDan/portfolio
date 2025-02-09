/* ------------------------------------------
-------------- CV MODAL POP-UP --------------
------------------------------------------ */

//Get the Modal
var modal = document.getElementById("cvModal");

//Get the link or button to open Modal
var modalLink = document.getElementById("modalLink");

//Get the modal close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//On Click, open the Modal 
modalLink.onclick = function() {
  modal.style.display = "block";
}

//On Click, close the Modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

//Click anywhere outside of the modal, close Modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}