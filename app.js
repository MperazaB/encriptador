function encriptar() {
    let texto = document.getElementById("inputTexto").value;

    // Verificar que el texto solo contenga letras minúsculas y sin caracteres especiales
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputTexto").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("inputTexto").value;

    // Verificar que el texto solo contenga letras minúsculas y sin caracteres especiales
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputTexto").value = textoDesencriptado;
}

async function copiarTexto() {
    let texto = document.getElementById("outputTexto").value;
    try {
        await navigator.clipboard.writeText(texto);
        alert("Texto copiado al portapapeles!");
    } catch (err) {
        alert("Hubo un problema al copiar el texto: " + err);
    }
}
