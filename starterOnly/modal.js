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
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
//===========================================================================================

// DOM Elements <input> for form ERROR
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const birthdateError = document.getElementById('birthdateError');
const quantityError = document.getElementById('quantityError');
//===========================================================================================

// LES MESSAGES D'ERREURS A IMPLEMENTER
const arrMessageError = [
  "Veuillez entrer 2 caractères ou plus pour le champ du prénon.", 
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "J'attends un e-mail, mon cher !",
  "Vous devez entrer votre date de naissance."];
  "Vous devez choisir une ville.", 
  "Vous devez vérifier que vous acceptez les termes et conditions.",
//===========================================================================================


// launch modal event
// Boucle, pour chaque bouton au clique faire apparaître le modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Evenement pour fermer le modal
// modalBtnClose.addEventListener("click", e => modalbg.style.display = "none");
modalBtnClose.addEventListener("click", closeModal);

/* FONCTIONS */
// launch modal form
function launchModal() {
  // Prend le modal pour le faire apparaître
  modalbg.style.display = "block";
};

function closeModal() {
  // Prend la classe du modal pour le faire disparître
  modalbg.style.display = "none";
}

function checkFirstName() {
  if(!firstName.value){
    console.log("Hello")
  }
};

//===========================================================================================





email.addEventListener("keyup", event => {
  if(email.validity.typeMismatch){
    email.setCustomValidity("J'attends un e-mail, mon cher !");
  }
  else{
    email.setCustomValidity("");
  }
})




