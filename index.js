/* 
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
  alert("funcionatambien");
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none"; 
}

 function encriptar(stringEncriptado){
  alert("funciona");
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase()

  for(let i=0; i<matrizCodigo.length; i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
  }
  return stringEncriptado
} 
 */

function encriptar(){
  alert("funciona");
  var texto = document.querySelector(".text-area").value.toLowerCase();
  var textoEncriptado = texto.replace(/e/img,"enter").replace(/i/img,"imes").replace(/a/img,"ai").replace(/o/img,"ober").replace(/u/img,"ufat");
  document.querySelector(".mensaje").value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

var boton1 =  document.querySelector(".btn-encriptar"); 
boton1.onclick = encriptar;

function desencriptar (){ 
  var texto = document.querySelector("#input-texto").value;
  var textoEncriptado = texto.replace(/enter/img,"e").replace(/imes/img,"i").replace(/ai/img,"a").replace(/ober/img,"o").replace(/ufat/img,"u"); 
  document.getElementById("input-texto-salida").value = textoEncriptado; 
  document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;
