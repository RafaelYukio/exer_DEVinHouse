const media = () => {
	let nota1 = parseInt(document.getElementById("nota1").value);
	let nota2 = parseInt(document.getElementById("nota2").value);
	let nota3 = parseInt(document.getElementById("nota3").value);;

	let media = (nota1 + nota2 + nota3) / 3;

	document.getElementById("media").innerHTML = media;
};

export { media };
