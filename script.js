// Banco de dados dinâmico de perguntas para o Quiz
const perguntas = [
    {
        pergunta: "Se você receber um vídeo chocante de uma celebridade falando algo absurdo, o que deve fazer primeiro?",
        opcoes: [
            { texto: "Compartilhar imediatamente nos grupos da escola.", correta: false },
            { texto: "Desconfiar, não compartilhar e pesquisar em fontes confiáveis.", correta: true }
        ]
    },
    {
        pergunta: "Qual desses detalhes costuma entregar uma imagem ou rosto gerado por Inteligência Artificial?",
        opcoes: [
            { texto: "Sombras perfeitas e fundo sempre focado.", correta: false },
            { texto: "Orelhas ou brincos assimétricos e reflexos estranhos nos olhos.", correta: true }
        ]
    }
];

let perguntaAtual = 0;
let acertos = 0;

function carregarPergunta() {
    const perguntaTexto = document.getElementById("quiz-pergunta");
    const opcoesContainer = document.getElementById("quiz-opcoes");
    const resultadoDiv = document.getElementById("resultado-quiz");
    
    resultadoDiv.style.display = "none";
    opcoesContainer.innerHTML = "";

    if (perguntaAtual < perguntas.length) {
        let q = perguntas[perguntaAtual];
        perguntaTexto.textContent = `Pergunta ${perguntaAtual + 1}: ${q.pergunta}`;
        
        q.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.className = "btn-quiz";
            botao.textContent = opcao.texto;
            botao.onclick = () => checarResposta(opcao.correta);
            opcoesContainer.appendChild(botao);
        });
    } else {
        // Fim do quiz
        document.getElementById("quiz-conteudo").innerHTML = `
            <h4>🎉 Desafio Concluído!</h4>
            <p>Você acertou ${acertos} de ${perguntas.length} perguntas.</p>
            <button class="btn-quiz" style="text-align:center" onclick="reiniciarQuiz()">Refazer Teste</button>
        `;
    }
}

function checarResposta(eCorreta) {
    const resultadoDiv = document.getElementById("resultado-quiz");
    resultadoDiv.style.display = "block";

    if (eCorreta) {
        acertos++;
        resultadoDiv.textContent = "✅ Excelente! Você identificou a prática correta.";
        resultadoDiv.style.background = "#D4EDDA";
        resultadoDiv.style.color = "#155724";
    } else {
        resultadoDiv.textContent = "❌ Cuidado! Essa ação ajuda a propagar desinformação.";
        resultadoDiv.style.background = "#F8D7DA";
        resultadoDiv.style.color = "#721C24";
    }

    // Avança para a próxima pergunta após 2 segundos
    perguntaAtual++;
    setTimeout(carregarPergunta, 2500);
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    // Restaura a estrutura original do html do quiz para reiniciar
    document.getElementById("quiz-container").innerHTML = `
        <h3>Desafio Cidadão Digital</h3>
        <div id="quiz-conteudo">
            <p id="quiz-pergunta" class="pergunta-texto">Carregando...</p>
            <div id="quiz-opcoes" class="quiz-opcoes"></div>
        </div>
        <div id="resultado-quiz" class="resultado"></div>
    `;
    carregarPergunta();
}

// Inicia o quiz assim que o arquivo é lido
window.onload = carregarPergunta;
