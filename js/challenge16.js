const moreNumbers= function(){
  let result;
  let number;
  let flagFirstNumber=false;
  do {
    number=parseInt(prompt("Ingresa un número entero: "));
    if(!isNaN(number)){
      if(!flagFirstNumber){
        result=String(number);
        flagFirstNumber=true;
      }else{
        number=String(number);
        result=result+number;
      }
    }else{
      alert("Ingresaste un número que no es válido")
    }
  } while (confirm("Desea ingresar otro número? "));
  alert(`Resultado: ${result}`);
}