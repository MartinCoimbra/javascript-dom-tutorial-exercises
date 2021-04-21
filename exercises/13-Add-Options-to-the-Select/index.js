window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	var select = document.querySelector("#mySelect");

	// your code here
	countries.forEach(element => {
		var option = document.createElement("option");
		option.append(element);
		select.appendChild(option);
    });
    
};
