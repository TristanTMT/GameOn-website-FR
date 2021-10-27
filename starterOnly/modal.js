// Target le formulaire par son ID
const $signInForm = document.querySelector("#sign-in-form");

//FAIRE LE RESPONSIVE ============================== IMPORTANT
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

// DOM Elements
const modalbgEnd = document.querySelector(".section-modal-message-end");
const btnModalEnd = document.querySelector(".modal-message-end-button");
//===========================================================================================

// DOM Elements <input> for form
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const cgu = document.getElementById('checkbox1');
// TABLEAU POUR TOUTES LES VILLES
const checkboxCity = [
  document.getElementById("location1"),
  document.getElementById("location2"),
  document.getElementById("location3"),
  document.getElementById("location4"),
  document.getElementById("location5"),
  document.getElementById("location6"),
];
//===========================================================================================
//===========================================================================================

// DOM Elements <input> for form ERROR
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const birthdateError = document.getElementById('birthdateError');
const quantityError = document.getElementById('quantityError');
const checkedCityError = document.getElementById("checkedCityError");
const cguError = document.getElementById("CGUError");

const inputStyleError = document.getElementsByTagName("input");
//===========================================================================================

// LES MESSAGES D'ERREURS A IMPLEMENTER AJOUTER COULER ROUGE
const arrMessageError = [
  "Veuillez entrer 2 caractères ou plus pour le champ du prénon.", 
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "J'attends un e-mail, mon cher !",
  "Vous devez entrer votre date de naissance.",
  "Vous devez choisir une ville.",
  "Vous devez vérifier que vous acceptez les termes et conditions.",
];
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

// Vérification du prénom

const checkFirstName = () => {
  if(!firstName.value || firstName.value.length < 2){
    firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    firstName.style.background = "#FFBABA"
    return false;
    // firstNameError.parentElement.setAttribute("data-error-visible", "true")
  }
  else if (firstName.value) {
    firstNameError.style.display = "none";
    firstName.style.background = ""
    return true;
  }
};

// Vérification du nom de famille

const checkedLastName = () => {
  if(!lastName.value || lastName.value.length < 2){
    lastNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le nom de famille."
    lastName.style.background = "#FFBABA"
    return false;
  }
  else {
    lastNameError.style.display = "none";
    lastName.style.background = ""
    return true;
  }
};

// Vérification de l'email

const checkedEmail = () => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(regexEmail)){
    emailError.style.display = "none"
    email.style.background = ""
    return true;
  }
  else if(!email.value){
    console.log('email vide');
    emailError.textContent = "Veuillez entrer une adresse mail valide."
    email.style.background = "#FFBABA"
    return false;
  }
  else {
    emailError.style.display = "none";
    email.style.background = ""
    return true;
  }
};

// Vérification de la date d'anniversaire

const getAgeInYears = () => {
  const today = new Date();
  const birthdayDate = new Date(birthdate.value);
  const dateInMl = today.getTime() - birthdayDate.getTime(); // Soustraction pour obtenir l'âge
  const age = dateInMl / 31536000000 // Retourne les millisecondes en années

  return age;
};

const checkedBirthdate = () => {
  if(!birthdate.value){
    birthdateError.textContent = "Vous devez entrer votre date de naissance."
    birthdate.style.background = "#FFBABA"
    return false;
  }
  else if( getAgeInYears() < 12 ) {
    console.log('Il faut avoir plus de 12 ans');
    birthdateError.textContent = "Il faut avoir plus de 12 ans"
    birthdate.style.background = "#FFBABA"
    return false;
  }
  else {
    birthdateError.style.display = "none";
    birthdate.style.background = ""
    return true;
  }
};
//===========================================================================================

// Vérification de la quantité

const checkedQuantity = () => {
  if(!quantity.value){
    quantityError.textContent = "Veuillez entrer un nombre en 0 et 99."
    quantity.style.background = ""
    return false;
  }
  else {
    quantityError.style.display = "none";
    quantity.style.background = ""
    return true;
  }
};

// Vérification de le ville

const checkedCity = () => {
  if(!checkboxCity[0].checked && !checkboxCity[1].checked && !checkboxCity[2].checked && !checkboxCity[3].checked && !checkboxCity[4].checked && !checkboxCity[5].checked){
    checkedCityError.textContent = "Veuillez sélectionner une ville."
    return false;
  }
  else {
    checkedCityError.style.display = "none";
    return true;
  }
};

// Vérification des conditions générales

const checkedCGU = () => {
  if(!cgu.value){
    cguError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions."
    cgu.style.background = "#FFBABA"
    return false;
  }
  else {
    cguError.style.display = "none";
    cgu.style.background = ""
    return true;
  }
};

//===========================================================================================
function launchModalEnd(){
  console.log("Hello");
  console.log("====");
  modalbgEnd.style.display = "flex";
};

function closeEndModal(){
  modalbgEnd.style.display = "none";
};

btnModalEnd.addEventListener("click", closeEndModal);


$signInForm.addEventListener("submit", event => {
  // Permet de ne pas renvoyer sur une nouvelle page vide
  event.preventDefault();

  if( checkFirstName() && checkedLastName() && checkedEmail() && checkedBirthdate() && checkedQuantity() && checkedCity() && checkedCGU() ){
    
    closeModal();
    launchModalEnd();
    /* La méthode HTMLFormElement.reset() restaure les valeurs par défaut des éléments du formulaire.
    Cette méthode fait la même chose que lorsqu'on clique sur un bouton de type reset. */
    document.getElementById("sign-in-form").reset();
    return true;
  }
  
})




