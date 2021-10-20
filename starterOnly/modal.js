function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".modal-btn__close");
//===========================================================================================

// DOM Elements <input> for form
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const birthdateError = document.getElementById('birthdateError');
const quantityError = document.getElementById('quantityError');
//===========================================================================================

/* FONCTIONS */
// launch modal form
function launchModal() {
  // Prend le modal pour le faire apparaître
  modalbg.style.display = "block";
}

function closeModal() {
  // Prend la classe du modal pour le faire disparître
  modalbg.style.display = "none";
}
//===========================================================================================

// launch modal event
// Boucle, pour chaque bouton au clique faire apparaître le modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Evenement pour fermer le modal
// modalBtnClose.addEventListener("click", e => modalbg.style.display = "none");
modalBtnClose.addEventListener("click", closeModal);


email.addEventListener("keyup", event => {
  if(email.validity.typeMismatch){
    email.setCustomValidity("J'attends un e-mail, mon cher !");
  }
  else{
    email.setCustomValidity("");
  }
})




