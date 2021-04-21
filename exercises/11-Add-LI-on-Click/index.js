let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var liS = document.createElement("li");
	liS.innerHTML = "Hello World";
	let ul = document.querySelector("#myList");
	ul.appendChild(liS);
});
