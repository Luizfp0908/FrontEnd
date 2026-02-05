document.addEventListener("DOMContentLoaded", function () {
    var texto = document.getElementById("TextoHome");

    if (!texto) {
        console.error("❌ Erro: Elemento com ID 'TextoHome' não encontrado!");
        return;
    } else {
        console.log("✅ Elemento 'TextoHome' encontrado com sucesso.");
    }

    window.addEventListener("scroll", function () {
        console.log("🖱️ Scroll detectado. Posição Y:", window.scrollY);
        
        if (window.scrollY > 50) {
            texto.style.opacity = "0";  // Esconde o texto
            texto.style.transition = "opacity 0.5s ease-in-out";
        } else {
            texto.style.opacity = "1";  // Mostra o texto novamente
        }
    });
});
