
function calcular()
{
	var numero1 = document.getElementById("numero1").value;
	var numero2 = parseInt(document.getElementById("numero2").value);
	var salida = document.getElementById("salida");
	var negative;

	if (numero1 < 0 && numero2 < 0 ) 
	{
		negative=true;
		if (negative) 
			{
				salida.innerHTML = "1";
				document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Numeros negativos</div>';
			}
		
	}
	else if (numero1 > 0 && numero2 > 0 ) 
	{
		negative=false;
		if (!negative) 
			{
				document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Numeros Positivos</div>';
				salida.innerHTML = "0";
			}
	}
	else 
	{
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Uno positivo u otro negativo ó No ingresaste datos</div>';
		salida.innerHTML = "1";
	}


}
