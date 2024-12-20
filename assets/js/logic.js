const creditNum = document.querySelector(".creditCardNum"),
  personName = document.querySelector(".personalData .name span"),
  birthYY = document.querySelectorAll(".birth span")[0],
  birthMM = document.querySelectorAll(".birth span")[1],
  cardPassword = document.querySelector(".backCard .cardPass span"),
  nameInp = document.getElementById("nameInp"),
  cardNumInp = document.getElementById("cardNumInp"),
  dateMM = document.getElementById("MM"),
  dateYY = document.getElementById("YY"),
  pass = document.getElementById("cvc"),
  dateNow = new Date().getFullYear();

document.querySelector(".form form").onsubmit = (e) => {
  errorsChecker(e);

  if (document.querySelectorAll(".error.hidden").length == 4) {
    fillData();
    document.querySelector(".form").style.display = "none";
    document.querySelector(".successPage").style.display = "grid";
  }
};

function fillData() {
  personName.innerHTML = nameInp.value;
  for (let i = 0; i < creditNum.children.length; i++) {
    creditNum.querySelectorAll("span")[i].innerHTML =
      cardNumInp.value.match(/(\d{4})/gi)[i];
  }

  if (Number(dateMM.value) <= 12 && Number(dateMM.value) > 0) {
    birthMM.innerHTML = dateMM.value;
  }

  if (Number(dateYY.value) <= dateNow && Number(dateYY.value) >= 1900) {
    birthYY.innerHTML = dateYY.value.split("").slice(2).join("");
  }

  cardPassword.innerHTML = pass.value;
}

function errorsChecker(e) {
  serialChecker();
  dateChecker();
  securityChecker();
  memberChecker();
  e.preventDefault();
}

function serialChecker() {
  if (cardNumInp.value == "") {
    cardNumInp.parentElement.querySelector(".error").classList.remove("hidden");
    cardNumInp.classList.add("errorInputting");
  } else if (cardNumInp.value !== "" && isNaN(cardNumInp.value) == true) {
    cardNumInp.parentElement.querySelector(".error").classList.remove("hidden");
    cardNumInp.classList.add("errorInputting");
  } else if (cardNumInp.value !== "" && cardNumInp.value.length !== 16) {
    cardNumInp.parentElement.querySelector(".error").classList.remove("hidden");
    cardNumInp.classList.add("errorInputting");
  } else {
    cardNumInp.parentElement.querySelector(".error").classList.add("hidden");
    cardNumInp.classList.remove("errorInputting");
  }
}

function dateChecker() {
  if (dateMM.value === "" || dateYY.value === "") {
    dateMM.parentElement.querySelector(".error").classList.remove("hidden");
    dateYY.classList.add("errorInputting");
    dateMM.classList.add("errorInputting");
  } else {
    dateMM.parentElement.querySelector(".error").classList.add("hidden");
    dateMM.classList.remove("errorInputting");
    dateYY.classList.remove("errorInputting");
  }
  if (Number(dateMM.value) <= 0 || Number(dateYY.value) < 1900) {
    dateMM.parentElement.querySelector(".error").classList.remove("hidden");
    dateYY.classList.add("errorInputting");
    dateMM.classList.add("errorInputting");
  } else {
    dateMM.parentElement.querySelector(".error").classList.add("hidden");
    dateMM.classList.remove("errorInputting");
    dateYY.classList.remove("errorInputting");
  }
}

function securityChecker() {
  if (pass.value == "") {
    pass.parentElement.querySelector(".error").classList.remove("hidden");
    pass.classList.add("errorInputting");
  } else {
    pass.parentElement.querySelector(".error").classList.add("hidden");
    pass.classList.remove("errorInputting");
  }
}

function memberChecker() {
  if (nameInp.value == "") {
    nameInp.parentElement.querySelector(".error").classList.remove("hidden");
    nameInp.classList.add("errorInputting");
  } else {
    nameInp.parentElement.querySelector(".error").classList.add("hidden");
    nameInp.classList.remove("errorInputting");
  }
}
