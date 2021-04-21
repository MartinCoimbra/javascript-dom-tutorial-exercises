let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
    //your code here
	let ul = document.querySelector("#myList");
	var liS = document.createElement("li");
	liS.innerHTML = "Hello World";
	ul.appendChild(liS);
});
