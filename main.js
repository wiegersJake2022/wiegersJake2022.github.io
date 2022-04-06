function strawberry() {
	document.getElementById("hello").innerHTML = "Strawberry";
}

document.getElementById("button").addEventListener("click", strawberry);

function changered(){
	document.getElementById("hello").style.backgroundColor = "red";
}
document.getElementById("button").addEventListener("click",changered);

