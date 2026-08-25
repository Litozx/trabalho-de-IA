const caixaPrincipal= document.querySelector(".caixa-principal")
const caixaPerguntas= document.querySelector(".caixa-perguntas")
const caixaAlternativas=document.querySelector(".caixa-alternativas")
const caixaResultado= document.querySelector(".caixa-resultado")
const textoResultado= document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "O último ano da faculdade começou e o grande desafio do Trabalho de Conclusão de Curso (TCC) finalmente chegou. O professor orientador pede para você escolher a abordagem do seu projeto. Qual caminho você decide seguir?",
        alternativas: [
            {
                texto: "Desenvolver um projeto prático focado em resolver um problema real do mercado de trabalho.",
                afirmacao: "Optou por uma abordagem prática no TCC, o que chamou a atenção de recrutadores logo no início do ano."
            },
            {
                texto: "Fazer uma pesquisa teórica aprofundada voltada para a vida acadêmica e científica.",
                afirmacao: "Mergulhou na pesquisa científica, descobrindo uma grande paixão pelo ambiente acadêmico."
            }
        ]
    },
    {
        enunciado: "Sua turma está organizando a comissão de formatura para planejar o baile e a colação de grau, mas isso exige bastante tempo e dedicação. Como você decide participar?",
        alternativas: [
            {
                texto: "Se candidatar para fazer parte da comissão e ajudar a organizar cada detalhe do evento.",
                afirmacao: "Desenvolveu ótimas habilidades de liderança e negociação ao fazer parte da comissão de formatura."
            },
            {
                texto: "Preferir não entrar na comissão e focar 100% o seu tempo nas matérias finais e no TCC.",
                afirmacao: "Manteve o foco total nos estudos, garantindo notas altas na reta final do curso."
            }
        ]
    },
    {
        enunciado: "Faltando poucos meses para a formatura, surge uma oportunidade para um estágio exigente na sua área, mas com chance real de efetivação. O que você faz?",
        alternativas: [
            {
                texto: "Aceitar a vaga e conciliar a rotina puxada do trabalho com as entregas finais da faculdade.",
                afirmacao: "Aprendeu a gerenciar melhor seu tempo sob pressão ao equilibrar o estágio e o fim da faculdade."
            },
            {
                texto: "Recusar a vaga para evitar o desgaste excessivo e se dedicar exclusivamente aos últimos meses de curso.",
                afirmacao: "Priorizou sua saúde mental e o encerramento do ciclo acadêmico sem o estresse de uma jornada dupla."
            }
        ]
    },
    {
        enunciado: "Chegou o dia da apresentação da sua banca final. Na hora de montar a apresentação para os avaliadores, qual estilo você escolhe?",
        alternativas: [
            {
                texto: "Apresentar de forma inovadora e dinâmica, utilizando recursos visuais modernos e uma fala descontraída.",
                afirmacao: "Surpreendeu a banca com uma apresentação marcante e demonstrou muita confiança ao falar em público."
            },
            {
                texto: "Seguir o modelo tradicional e rigoroso da academia, focando na precisão técnica dos dados.",
                afirmacao: "Entregou uma defesa técnica impecável que foi elogiada pelo rigor e seriedade com a pesquisa."
            }
        ]
    },
    {
        enunciado: "Com o diploma na mão e a sensação de dever cumprido após a colação de grau, é hora de olhar para frente. Qual é o seu próximo passo?",
        alternativas: [
            {
                texto: "Entrar de cabeça no mercado de trabalho e buscar oportunidades na sua área imediatamente.",
                afirmacao: "Iniciou sua trajetória profissional com garra, aplicando rapidamente tudo o que aprendeu na graduação."
            },
            {
                texto: "Continuar os estudos e engrenar em uma pós-graduação ou especialização.",
                afirmacao: "Decidiu continuar se especializando para se tornar uma referência técnica no seu segmento."
            }
        ]
    }
];

let atual= 0;
let perguntaAtual;
let historiaFinal = ""

function mostraPergunta(){
  if (atual>= perguntas.length) {
    mostraResultado()
    return
  }
  perguntaAtual = perguntas[atual]
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas()
}

function mostraAlternativas(){
 for (const alternativas of perguntaAtual.alternativas){
    const botaoAlternativas=document.createElement("button")
    botaoAlternativas.textContent = alternativa.texto
    botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa))
    
 }


}


mostraPergunta(){

 }
