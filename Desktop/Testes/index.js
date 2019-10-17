var a, b, resultado;


function somar(){
	var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);

	resultado = a + b;

	document.getElementById("resul").value = resultado;
}

function subtrair(){
	var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);

	resultado = a - b;

	document.getElementById("resul").value = resultado;
}

function multiplicar(){
	var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);

	resultado = a * b;

	document.getElementById("resul").value = resultado;
}

function dividir(){
	var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);

	resultado = a / b;

	document.getElementById("resul").value = resultado;
}

//Impede que Letras sejam digitadas
function bloqueiaLetra(texto){
  var tecla = texto.which || texto.keyCode;
  if ((tecla >=48 && tecla <= 57)){
    return true;
  }else{
    return false;
  }
}