let botao;
let cenario1;
let cenario2;
let paisagem;
let personagem;
let pontuacao;
let recorde = 0;
let vida;

let cenaAtual = 'telaInicial';
let cenas;
let jogo;
let telaInicial;
let gameOver;
let intro1;
let intro2;

let imagemCenario1;
let imagemCenario2;
let imagemPaisagem;
let imagemPersonagem;
let imagemVida;
let imagemCobraVerde;
let imagemCobraVermelha;
let imagemLoboMarrom;
let imagemTouro;
let imagemBarril;
let imagemGameOver;
let imagemTelaInicial;
let imagemGravidade;
let imagemIntro1;
let imagemIntro2;
let imagemScore;

let musicaJogo;
let somPuloNormal;
let somPuloDuplo;
let somDano;
let somGameOver;

let fonteTelaInicial;
let fonteGameOver;
let fonteDisc;

const matrizCobra = [
    [0,0],
    [75,0],
    [0,76],
    [75,76],
    [0,152],
    [75,152],
  ];

const matrizLobo = [
    [0,0],
    [115,0],
    [0,42],
    [115,42],
    [0,84],
    [115,84],
  ];

const matrizTouro = [
    [0,0],
    [200,0],
    [0,140],
    [200,140],
    [0,280]
  ];

const matrizBarril = [
    [0,0],
    [75,0],
    [0,54],
    [75,54],
  ];

const matrizPersonagem = [
  [0,0],
  [140,0],
  [280, 0],
  [0,140],
  [140,140],
  [280, 140],
];

const matrizGravidade = [
  [0,0],
  [73,0],
  [0,87],
  [73,87],
];

const matrizScore = [
  [0,0],
  [90,0],
  [0,90],
  [90,90],
];

const inimigos = [];
const powerUps = [];