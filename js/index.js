// Your code goes here

// Changes size and decoration of h1 title on mouseover
const title = document.querySelector("h1");
title.addEventListener("mouseover", event => {
  event.target.style.fontSize = "5rem";
  event.target.style.fontWeight = "bold";
});
title.addEventListener("mouseout", event => {
  event.target.style.fontSize = "4rem";
  event.target.style.fontWeight = "normal";
});

// Changes color of nav links on mouseover
const links = document.querySelector("nav");
links.addEventListener("mouseover", event => {
  event.target.style.color = "lightgrey";
});
links.addEventListener("mouseout", event => {
  event.target.style.color = "black";
});

// Adds ridged border to all images on mouseover
const topImg = document.querySelector(".intro img");
topImg.addEventListener("mouseover", event => {
  event.target.style.border = "10px ridge lightgrey";
  event.target.style.borderRadius = "10px";
});
topImg.addEventListener("mouseout", event => {
  event.target.style.border = "none";
  event.target.style.borderRadius = "0px";
});
topImg.addEventListener("click", event => {
  event.target.style.display = "float";
});

const topMidImg = document.querySelector(".content-section .img-content img");
topMidImg.addEventListener("mouseover", event => {
  event.target.style.border = "10px ridge lightgrey";
  event.target.style.borderRadius = "10px";
});
topMidImg.addEventListener("mouseout", event => {
  event.target.style.border = "none";
});

const topBotImg = document.querySelector(".inverse-content .img-content img");
topBotImg.addEventListener("mouseover", event => {
  event.target.style.border = "10px ridge lightgrey";
  event.target.style.borderRadius = "10px";
});
topBotImg.addEventListener("mouseout", event => {
  event.target.style.border = "none";
});

const destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener("mouseover", event => {
  event.target.style.border = "10px ridge lightgrey";
  event.target.style.borderRadius = "10px";
});
destinationImg.addEventListener("mouseout", event => {
  event.target.style.border = "none";
});

// Changes background color of footer & header on click
const footer = document.querySelector(".footer");
footer.addEventListener("click", event => {
  event.target.style.background = "coral";
});

const header = document.querySelector(".main-navigation");
header.addEventListener("click", event => {
  event.target.style.background = "coral";
});

// Change background of main content on double click
const home = document.querySelector(".home");
home.addEventListener("dblclick", event => {
  home.style.background = "#FFEBCD";
});

// Change background of buttons on mousedown & maintain hover styles from CSS
const buttons = Array.from(document.querySelectorAll(".btn"));
const button1 = buttons[0];
const button2 = buttons[1];
const button3 = buttons[2];

button1.addEventListener("mousedown", event => {
  event.target.style.background = "#FFEBCD";
});
button1.addEventListener("mouseup", event => {
  event.target.style.background = "white";
});
button1.addEventListener("mouseover", event => {
  event.target.style.background = "#FFFFFF";
});
button1.addEventListener("mouseout", event => {
  event.target.style.background = "#17A2B8";
});

button2.addEventListener("mousedown", event => {
  event.target.style.background = "#FFEBCD";
});
button2.addEventListener("mouseup", event => {
  event.target.style.background = "white";
});
button2.addEventListener("mouseover", event => {
  event.target.style.background = "#FFFFFF";
});
button2.addEventListener("mouseout", event => {
  event.target.style.background = "#17A2B8";
});

button3.addEventListener("mousedown", event => {
  event.target.style.background = "#FFEBCD";
});
button3.addEventListener("mouseup", event => {
  event.target.style.background = "white";
});
button3.addEventListener("mouseover", event => {
  event.target.style.background = "#FFFFFF";
});
button3.addEventListener("mouseout", event => {
  event.target.style.background = "#17A2B8";
});

// Change font style of intro text on auxclick
const topPara = document.querySelector(".intro");
topPara.addEventListener("auxclick", event => {
  topPara.style.fontStyle = "italic";
});

// Change font style of intro h2 text on auxclick -- propagation stopped before style change reaches paragraph text
const topTitle = document.querySelector(".intro h2");
topTitle.addEventListener("auxclick", event => {
  event.target.style.fontStyle = "italic";
  event.stopPropagation();
});
