function ocultar() {
  // document.getElementById("frame-5").style.visibility = "hidden";
    var x = document.getElementById("frame-5");
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
  
  function ocultarImagen() {
    document.getElementById("imagen").style.visibility = "hidden";
  }

  function ocultarFrame() {
    ocultar();
    ocultarImagen();
  }

function encriptar(){
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var textoEncriptado = texto.replace(/e/img,"enter").replace(/i/img,"imes").replace(/a/img,"ai").replace(/o/img,"ober").replace(/u/img,"ufat");
    document.querySelector("#input-texto-salida").value = textoEncriptado;
}

var boton1 =  document.querySelector("#btn-encriptar"); 
boton1.onclick = encriptar;

function desencriptar (){ 
    var texto = document.querySelector("#input-texto").value;
    var textoEncriptado = texto.replace(/enter/img,"e").replace(/imes/img,"i").replace(/ai/img,"a").replace(/ober/img,"o").replace(/ufat/img,"u"); 
    document.getElementById("input-texto-salida").value = textoEncriptado; 
    document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;