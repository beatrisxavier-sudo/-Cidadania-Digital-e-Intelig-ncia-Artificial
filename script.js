function verificarResposta(eCorreto) {
    const resultadoDiv = document.getElementById('resultado-quiz');
    
    // Torna a div de resultado visível
    resultadoDiv.style.display = "block";
    
    if (eCorreto) {
        resultadoDiv.textContent = "✅ Correto! Desconfiar de conteúdos absurdos, não partilhar e validar a informação em canais oficiais é a melhor atitude de um cidadão digital.";
        resultadoDiv.style.backgroundColor = "#D4EDDA";
        resultadoDiv.style.color = "#155724";
        resultadoDiv.style.border = "1px solid #C3E6CB";
    } else {
        resultadoDiv.textContent = "❌ Incorreto. Partilhar vídeos ou notícias sem verificar a sua veracidade ajuda a espalhar desinformação e pode prejudicar pessoas inocentes.";
        resultadoDiv.style.backgroundColor = "#F8D7DA";
        resultadoDiv.style.color = "#721C24";
        resultadoDiv.style.border = "1px solid #F5C6CB";
    }
}
