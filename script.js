//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

const texto = document.querySelector(".texto");
const resposta__p1 = document.querySelector(".resposta__p1");

function botao_cripto() {
    const textoCriptografado = cripto(texto.value);
    resposta__p1.innerHTML = textoCriptografado;
    texto.value = "";
}

function botao_descripto() {
    const textoDescriptografado = descripto(texto.value);
    resposta__p1.innerHTML = textoDescriptografado;
    texto.value = "";
}

function cripto(stringCriptografada) {

    if(!caracteresEspeciais(texto.value) && !letrasMaiusculas(texto.value) && !letrasAcentuadas(texto.value)) {

        let criptografia = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
        stringCriptografada = stringCriptografada.toLowerCase();

        for(let i = 0; i < criptografia.length; i++) {
            if(stringCriptografada.includes(criptografia[i][0])) {
                stringCriptografada = stringCriptografada.replaceAll(criptografia[i][0], criptografia[i][1])
            }
        }

        return stringCriptografada;
    } else {
        alert("A sua mensagem contém caracteres inválidos, digite apenas letras minúsculas e sem acento")
    }
}

function descripto(stringDescriptografada) {

    let descriptografia = [["enter" , "e"] , ["imes" , "i"] , ["ai" , "a"] , ["ober" , "o"] , ["ufat" , "u"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < descriptografia.length; i++) {
        if(stringDescriptografada.includes(descriptografia[i][0])) {
            stringDescriptografada = stringDescriptografada.replaceAll(descriptografia[i][0], descriptografia[i][1])
        }
    }

    return stringDescriptografada;
}

function copiarFrase() {

    var fraseResultado = document.querySelector(".resposta__p1").innerHTML;

    var temporariaInput = document.createElement("textarea");
    temporariaInput.value = fraseResultado;
    document.body.appendChild(temporariaInput);

    temporariaInput.select();
    temporariaInput.setSelectionRange(0, 99999);

    document.execCommand('copy');

    temporariaInput.parentNode.removeChild(temporariaInput);
    
    alert(`O seu texto "${fraseResultado}" foi copiado com sucesso!`)
}

function caracteresEspeciais(frase){
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]/;
    return regex.test(frase);
}

function letrasMaiusculas(frase){
    var regex = /[A-Z]/;
    return regex.test(frase);
}

function letrasAcentuadas(frase){
    var regex = /[ÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÃÕ]/i;
    return regex.test(frase);
}