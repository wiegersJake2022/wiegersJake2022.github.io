var b1 =document.getElementById("lord");
var b2 =  document.getElementById("Wiscon");
var  b3 = document.getElementById("lego");
var b4 = document.getElementById("RIM");
var b5 = document.getElementById("RED");
var b6 = document.getElementById("PS4");
var b7 = document.getElementById("Purpel")
var image = document.getElementById("image");

function changeLORD() {
	image.src = "images/lord.jfif";
}

function changeWiscon() {
	image.src = "images/Wisconsin.jpg";
}
function changeLego() {
	image.src = "images/lego.jpg"
}
function changeRIM() {
	image.src = "images/rim.jfif";
}
function changeRED() {
	image.src = "images/red.png";
}

function changePS4() {
	image.src = "images/PS4.jfif";
}
function changePurpel() {
	image.src = "images/purpel.png";
}

b1.addEventListener("click",changeLORD);
b2.addEventListener("click",changeWiscon);
b3.addEventListener("click",changeLego);
b4.addEventListener("click",changeRIM);
b5.addEventListener("click",changeRED);
b6.addEventListener("click",changePS4);
b7.addEventListener("click",changePurpel);
