// GET ELEMEMTS
const inputName = document.getElementById("inputName");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const showSavedText = document.getElementById("showSavedText");
const formData = document.getElementsByTagName("form");

// WINDOW.ONLOAD show name & set timer
window.onload = function () {
  showSavedText.textContent = localStorage.getItem("nome");
  timerStart();
  setInterval(() => {
    timerStart();
  }, 1000);
};

formData.onsubmit = (e) => {
  e.preventDefault();
  const nameSaved = inputName.value;
  localStorage.setItem("name", nameSaved);
};

deleteBtn.onclick = function () {
  localStorage.removeItem("nome");
  showSavedText.textcontent = "";
};

function getSavedText() {
  return localStorage.getItem(nameSaved);
}

//TIMER
const timer = document.getElementById("time");

function timerStart() {
  let t = sessionStorage.getItem("t");
  if (!t) {
    t = 0;
  }
  t++;
  sessionStorage.getItem("t");
}
