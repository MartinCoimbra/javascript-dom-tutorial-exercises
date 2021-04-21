let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var divC = document.createElement("div");
	divC.innerHTML = "Hello World";
	divC.style.background = "yellow";
	document.body.appendChild(divC);
});
