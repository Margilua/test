function loremipsum(){
	//text original de lorem ipsum
	var text_lorem = "lorem ipsum dolor sit amet consectetur adipiscing elit maecenas molestie lacus eget consectetur pulvinar eros ex aliquam orci eu elementum mauris risus nec felis nullam posuere lorem ac commodo ornare proin vestibulum at diam eget vestibulum duis at placerat nulla in vel dui vitae arcu lobortis sagittis nullam in laoreet dolor eu varius nisi vestibulum auctor mattis ipsum id ultricies interdum et malesuada fames ac ante ipsum primis in faucibus vivamus nec enim tincidunt dapibus elit et iaculis nunc proin malesuada condimentum purus vel tincidunt magna tristique sed maecenas non odio sed sem aliquam scelerisque et ut urna nullam bibendum lorem non gravida pretium mauris purus augue ultrices a malesuada et congue eu urna quisque non dui metus in eget nisl quis tellus dapibus consequat ut ac tortor";

	var lorem_print="";//aixo s'hi imprimira per pantalla

	//crem un array de paraules
	var array_lorem = text_lorem.split(" ");

	//console.log(array_lorem);

	//demanem els valors
	var numparrafs=prompt ("parrafs:");
	var numparaules=prompt("paraules:");


	for (m = 0; m<numparrafs; m++) { //per a cada pràgraf... escriure, les paraules solicitades
		for(n=0; n<numparaules; n++){ //desde 0 a 50 fem paraules aleatories
			console.log("paragraf: "+m+" | "+"paraula: "+n);
			var aleatorio = Math.floor ((Math.random()* array_lorem.length-1)); //generem l'aleatori
			lorem_print = lorem_print + array_lorem [aleatorio]+" "; //creem el paràgraf
		}
		document.getElementById("resultat_lorem").innerHTML += "<p>Lorem ipsum "+lorem_print+ ".</p>";
		lorem_print = "";
	}
}