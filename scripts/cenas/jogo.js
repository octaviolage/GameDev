class Jogo {
  constructor() {
    this.inimigoAtual = 0;
    this.powerUpAtual = 0;
    this.tocaMusica = false;
  }

  setup() {
    paisagem = new Cenario(imagemPaisagem, 1);
    cenario2 = new Cenario(imagemCenario2, 2);
    cenario1 = new Cenario(imagemCenario1, 3);
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 20, 110, 135, 140, 140);
    
    const cobraVerde = new Inimigo(matrizCobra, imagemCobraVerde, width, 20, 60, 61, 75, 76, 10);
    const loboMarrom = new Inimigo(matrizLobo, imagemLoboMarrom, width, 20, 230, 82, 115, 42, 16);
    const touro = new Inimigo(matrizTouro, imagemTouro, width, 20, 220, 150, 200, 140, 16);
    const barril = new Inimigo(matrizBarril, imagemBarril, width, 20, 75, 54, 75, 54, 16);
    
    const gravidade0 = new PowerUp(matrizGravidade, imagemGravidade, width, 35, 35, 35, 73, 87, 'gravidadeZero');
    const maisVida = new PowerUp([[0,0],[28, 0]], imagemVida, width, 35, 35, 35, 28, 25, 'maisVida');
    const score = new PowerUp(matrizScore, imagemScore, width, 35, 35, 35, 90, 90, 'score');
    
    pontuacao = new Pontuacao();
    vida = new Vida(6, 3);
    
    inimigos.push(barril);
    inimigos.push(cobraVerde);
    inimigos.push(barril);
    inimigos.push(barril);
    inimigos.push(loboMarrom);
    inimigos.push(loboMarrom);
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
    personagem.pula();
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
    
    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura; 

    inimigo.exibe();
    inimigo.move();
    
    if (inimigoVisivel) {
      this.inimigoAtual = parseInt(random(0, inimigos.length));
      inimigo.velocidade = random(12, 25);
    }

    if (personagem.colidindo(inimigo)) {
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
    
    if(pontuacao.getPontos() % 200 === 0 && powerUpVisivel && pontuacao.getPontos() != 0) {
      this.powerUpAtual = random(0, powerUps.length);
      powerUp.mudaY(random(height - height/3, height - height/4.5));
      powerUp.aparece();
    }

    powerUp.exibe();
    powerUp.move();
    
    if (personagem.buff(powerUp)) {
      if(powerUp.funcao === 'gravidadeZero'){
        personagem.zeroGravidade();
      }
      if(powerUp.funcao === 'maisVida'){
        vida.somaVida();
      }
      if(powerUp.funcao === 'score'){
        pontuacao.somaPontos();
      }
      powerUp.x = -width;
    }

    pontuacao.exibe();
    pontuacao.adicionarPonto();
    
  }
}