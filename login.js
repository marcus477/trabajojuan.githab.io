
function loguear()
{
var user=document.getElementById('a1').value;
var pass=document.getElementById('a2').value;

if(user=="juanmarcos" && pass=="potosi")	
{
	alert("DATOS CORRECTOS");
      window.location="inicio.html";

    }else{
      alert("DATOS INCORRECTOS");
  }
}