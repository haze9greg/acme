document.getElementById("gButton").onclick = guests;
	document.getElementById("sButton").onclick = speakers;

/****************************
	GUESTS/SPEAKERS
*****************************/
function guests(){
	document.querySelector("#form1").style.display = "block";
	document.querySelector("#form2").style.display = "none";
	this.style.background = "black";
	document.getElementById("sButton").style.background = "grey";
	
}

function speakers(){
	document.querySelector("#form2").style.display = "block";	
	document.querySelector("#form1").style.display = "none";
	this.style.background = "black";
	document.getElementById("gButton").style.background = "grey";
}