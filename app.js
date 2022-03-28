const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const colorHex = document.querySelector(".hex-color");
const main = document.querySelector(".main");
const title = document.querySelector(".title");
const bgTitle = document.querySelector(".bg");

const randomHex = () => {
  return Math.floor(Math.random() * hex.length);
};

btn.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomHex()];
  }

  colorHex.innerHTML = hexColor;
  main.style.backgroundColor = hexColor;
  title.style.color = hexColor;
  bgTitle.style.color = hexColor;
});
