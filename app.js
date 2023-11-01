// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
// const Name = ["Nitin", "Riyan", "mike"];

const Name = [
  { Name: "Nitin-Dharmesh", age: 21 },
  { Name: "ryan", age: 20 },
  { Name: "Mike", age: 19 },
];

// target
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const text = document.querySelector(".text-content");

// modalBtn.addEventListener("click", function () {
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("open-modal");
// });
modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
  text.textContent = JSON.stringify(Name[clicktime()]);
  document.querySelector(".text-content").style.fontSize = "14px";
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

function clicktime() {
  return Math.floor(Math.random() * Name.length);
}
