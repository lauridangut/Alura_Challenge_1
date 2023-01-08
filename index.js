function ocultar() {
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

/* function encriptar(){
    var texto = document.querySelector("#input-texto").value;
    var textoEncriptado = texto.replace("e","enter").replace("i","imes").replace("a","ai").replace("o","ober").replace("u","ufat");
    document.querySelector("#input-texto").value;
}

var boton1 =  */