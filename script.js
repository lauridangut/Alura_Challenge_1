function btnEncriptar() {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    var stringEncriptado = document.querySelector(".text-area").value.toLowerCase()
    

     for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    
    const result = stringEncriptado;
    document.querySelector(".mensaje").value = result;
    document.querySelector(".text-area").value = "";
    document.querySelector(".mensaje").style.backgroundImage = "none";
}


function btnDesencriptar() {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    var stringDesencriptado = document.querySelector(".mensaje").value
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    
    const resultado = stringDesencriptado;
    document.querySelector(".text-area").value = resultado;
    document.querySelector(".mensaje").value = "";

}