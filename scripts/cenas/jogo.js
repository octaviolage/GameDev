class Jogo {
  constructor() {
    this.inimigoAtual = 0;
    this.powerUpAtual = 0;
    this.tocaMusica = false;
    this.textinho = '';
    this.contText = 15;
  }

  setup() {
    paisagem = new Cenario(imagemPaisagem, 1);
    cenario2 = new Cenario(imagemCenario2, 2);
    cenario1 = new Cenario(imagemCenario1, 4);
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, width/5, 20, width/10, width/10, 140, 140);
    
    //const cobraVerde = new Inimigo(matrizCobra, imagemCobraVerde, width, 20, 60, 61, 75, 76, 10);
    loboMarrom = new Inimigo(matrizLobo, imagemLoboMarrom, width, 20, width/6, height/8, 115, 42, 16);
    touro = new Inimigo(matrizTouro, imagemTouro, width, 20, width/5, height/4, 200, 140, 16);
    barril = new Inimigo(matrizBarril, imagemBarril, width, 20, width/11, height/11, 75, 54, 16);
    corvo = new InimigoVoador(matrizCorvo, imagemCorvo, width, 90, width/10, height/9, 100, 80, 24);
    
    const gravidade0 = new PowerUp(matrizGravidade, imagemGravidade, width, 35, 35, 35, 73, 87, 'gravidadeZero');
    const maisVida = new PowerUp([[0,0],[28, 0]], imagemVida, width, 35, 35, 35, 28, 25, 'maisVida');
    const score = new PowerUp(matrizScore, imagemScore, width, 35, 35, 35, 85, 75, 'score');
    
    pontuacao = new Pontuacao();
    vida = new Vida(5, 3);
    
    pause = new Pause(matrizPause, imagemPause, width/2-20, 30, 43, 38);
    
    inimigos.push(barril);
    inimigos.push(barril);
    inimigos.push(barril);
    inimigos.push(loboMarrom);
    inimigos.push(touro);
    inimigos.push(touro);
    
    powerUps.push(score);
    powerUps.push(score);
    powerUps.push(score);
    powerUps.push(gravidade0);
    powerUps.push(gravidade0);
    powerUps.push(maisVida);
  }

  keyPressed() {
    if (key === 'ArrowUp') {
      personagem.pula();
    }
  }
  
  mousePressed() {
    if(!pause.colidindo()){
      personagem.pula();
    }
    
  }

  draw() {  
    if(!this.tocaMusica){
      musicaJogo.loop();
      this.tocaMusica = true;
    }
    
    paisagem.exibe();
    paisagem.move();
    
    cenario2.exibe();
    cenario2.move();
    cenario1.exibe();
    cenario1.move();
    
    vida.draw();
    pause.draw();
    
    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura; 

    inimigo.exibe();
    inimigo.move();
    
    if (inimigoVisivel) {
      this.inimigoAtual = parseInt(random(0, inimigos.length));
      inimigo.velocidade = random(12, 30);
    }
    
    const inimigoVoadorVisivel = corvo.x < -corvo.largura; 

    corvo.exibe();
    corvo.move();
    
    if (inimigoVoadorVisivel) {
      corvo.velocidade = random(12, 30);
      corvo.y = random(height-50, height/2);
    }
    

    if (personagem.colidindo(inimigo) || personagem.colidindo(corvo)) {
      vida.perdeVida();
      personagem.dano();
      somDano.play()
      personagem.tornaInvencivel();
      if(vida.vidas < 1){
        musicaJogo.stop();
        somGameOver.play();
        cenaAtual = 'gameOver';
      }
    }
    const powerUp = powerUps[parseInt(this.powerUpAtual)];
    const powerUpVisivel = powerUp.x < -powerUp.largura;
    
    if(pontuacao.getPontos() % 110 === 0 && powerUpVisivel && pontuacao.getPontos() != 0) {
      this.powerUpAtual = random(0, powerUps.length);
      powerUp.mudaY(random(height - height/3, height - height/4.5));
      powerUp.aparece();
    }

    powerUp.exibe();
    powerUp.move();
    
    if (personagem.buff(powerUp)) {
        textFont(fonteGameOver);
      if(powerUp.funcao === 'gravidadeZero'){
        this.textinho = '(Gravidade Lunar)';
        personagem.zeroGravidade();
      }
      if(powerUp.funcao === 'maisVida'){
        this.textinho = '(1 vida)';
        vida.somaVida();
      }
      if(powerUp.funcao === 'score'){
        this.textinho = '(50 pontos)';
        pontuacao.somaPontos();
      }
      somPowerUp.play();
      powerUp.x = -width;
      this.contText = 0;
      
    }
    if(this.contText < 15){
      textAlign(CENTER);
      fill('#fff');
      textSize(20);
      text(this.textinho, personagem.x + personagem.largura/2, height * 0.8);
      this.contText++;
    }
    
    

    pontuacao.exibe();
    pontuacao.adicionarPonto();
    
  }
}