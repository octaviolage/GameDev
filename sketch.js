function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  gameOver = new GameOver();
  intro1 = new Intro1();
  intro2 = new Intro2();
  cenas = {
    jogo,
    telaInicial,
    gameOver,
    intro1,
    intro2
  };
  frameRate(30);
}

function keyPressed() {
  jogo.keyPressed();
}

function mousePressed() {
  jogo.mousePressed();
  if(cenaAtual === 'gameOver'){
    gameOver.mousePressed();
  }
  if(cenaAtual === 'intro1'){
    intro1.mousePressed();
  }
  if(cenaAtual === 'intro2'){
    intro2.mousePressed();
  }
  if(cenaAtual === 'jogo'){
    pause.mousePressed();
  }
}

function draw() {
  cenas[cenaAtual].draw();
}