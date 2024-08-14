const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Voce gosta de cozinhar?",
            },
            {
                texto: "sim eu amo?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já teve alguma esperiência em algum restaurante?",
            },
            {
                texto: "sim.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou auxílio na internet, vídeos no YouTube, entre outros.",
            },
            {
                texto: "sim, as vezes.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Um bom local para procurar é o chefe Èrick Jacquin",
            },
            {
                texto: "sim eu quero este site.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Ja trabalhou ou pensa em trabalhar em restaurante.",
            },
            {
                texto: "sim eu quero ter mais experiências.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode ir em uma plataforma da Paola olivbeira, .",
            },
            {
                texto: " quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "fez algum curso ou pretende fazer uma faculdade de Gastronomia.",
            },
            {
                texto: "sim eu ja fiz curso e pretendo sim fazer faculdade.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();