var count = 0;

function minus(){
	count = count -1;
	document.getElementById("total").innerHTML= count;
}

function plus(){
	count = count +1;
	document.getElementById("total").innerHTML= count;
}
function times(){
	count = count *10;
	document.getElementById("total").innerHTML=count;
}
function divid(){
	count = count /10;
	document.getElementById("total").innerHTML=count;
}
function plus100(){
	count=count+100;
	document.getElementById("total").innerHTML=count
}
function divid2(){
	count=count/2
	document.getElementById("total").innerHTML=count
}

document.getElementById("minus").addEventListener("click",minus);
document.getElementById("plus").addEventListener("click",plus);
document.getElementById("times").addEventListener("click",times);
document.getElementById("divid").addEventListener("click",divid);
document.getElementById("plus100").addEventListener("click",plus100);
document.getElementById("divid2").addEventListener("click",divid2);
