function verificarResposta(eCorreto) {
    const resultadoDiv = document.getElementById('resultado-quiz');
    
    if (eCorreto) {
        resultadoDiv.textContent = "✅ Excelente! Essa é a atitude correta de um cidadão digital responsável. Sempre cheque antes de repassar.";
        resultadoDiv.className = "resultado correto";
    } else {
        resultadoDiv.textContent = "❌ Atenção! Compartilhar sem checar ajuda a espalhar a desinformação e pode prejudicar inocentes. Sempre pesquise antes!";
        resultadoDiv.className = "resultado errado";
    }
}
