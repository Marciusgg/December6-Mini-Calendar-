const monthElement = document.getElementById("month");
const dayNameElement = document.getElementById("day-name");
const dayNumELement = document.getElementById("day-number");
const yearElement = document.getElementById("year");

const englishBtn = document.getElementById("english-btn");
const lithuanianBtn = document.getElementById("lithuanian-btn");
const russianBtn = document.getElementById("russian-btn");

function updateDateDisplay(locale){
const date = new Date();

monthElement.innerText = date.toLocaleString(locale, {month:"long"});
dayNameElement.innerHTML = date.toLocaleString(locale, {weekday:"long"});
dayNumELement.innerHTML = date.getDate();
yearElement.innerHTML = date.getFullYear();
}

englishBtn.addEventListener("click", () => updateDateDisplay("en"));
lithuanianBtn.addEventListener("click", () => updateDateDisplay("lt"));
russianBtn.addEventListener("click", () => updateDateDisplay("ru"));

updateDateDisplay(undefined);