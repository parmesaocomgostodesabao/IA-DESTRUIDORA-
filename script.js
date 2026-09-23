const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = [
    {
            enunciado: "Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?",
                    alternativas: [
                                "Alternativa 1",
                                            "Alternativa 2"
                                                    ]
                                                        },
                                                            {
                                                                    enunciado: "Com a descoberta desta tecnologia uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula ela pede que Gabriel escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude Gabriel toma? 1",
                                                                            alternativas: [
                                                                                        "Alternativa 1",
                                                                                                    "Alternativa 2"
                                                                                                            ]
                                                                                                                },
                                                                                                                    {
                                                                                                                            enunciado: "Depois que Gabriel escreveu o trabalho, teve uma discussão sobre o impacto da IA no trabalho do futuro o que Gabriel faz:",
                                                                                                                                    alternativas: [
                                                                                                                                                "Alternativa 1",
                                                                                                                                                            "Alternativa 2"
                                                                                                                                                                    ]
                                                                                                                                                                        },
                                                                                                                                                                            {
                                                                                                                                                                                    enunciado: "Ao final da discussão, Gabriel precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
                                                                                                                                                                                            alternativas: [
                                                                                                                                                                                                        "Criar uma imagem utilizando um gerador de imagem de IA.",
                                                                                                                                                                                                                    "Criar uma imagem utilizando uma plataforma de design como o Paint."
                                                                                                                                                                                                                            ]
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                ];

                                                                                                                                                                                                                                let atual = 0;
                                                                                                                                                                                                                                let perguntaAtual;

                                                                                                                                                                                                                                function mostraPergunta() {
                                                                                                                                                                                                                                    perguntaAtual = pergunta1[atual];
                                                                                                                                                                                                                                    caixaPerguntas.textContent = perguntaAtual.enunciado;
                                                                                                                                                                                                                                
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                mostraPergunta();