// const red = document.querySelector(".block--red");
// const blue = document.querySelector(".block--blue");
// const green = document.querySelector(".block--green");
// const pink = document.querySelector(".block--pink");
// const gray = document.querySelector(".block--gray");

const blocks = document.querySelectorAll(".block");
blocks.forEach(function(block) {
  block.addEventListener("click", event => {
    blocks.forEach(function(block) {
      block.style.order = "1";
    });
    event.target.style.order = "0";
  });
});
