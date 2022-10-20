const circle = document.querySelectorAll(".circle");
const mark = document.querySelector(".mark");
const number = document.querySelector(".number");
const columns = document.querySelectorAll(".columns");
const special = document.querySelectorAll(".special");
mark.addEventListener("click", () => {
  circle.forEach((minicircle) => {
    minicircle.style.display = "none";
    number.innerText = "0";
  });
});
