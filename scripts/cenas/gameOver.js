class GameOver {
 constructor() {
   this.tocaMusica = false;
   this.cont = false;
 }
  
   mousePressed() {
     if(this.cont){
        personagem.tornaInvencivel();
       vida.vidas = vida.inicial;
       vida.draw();
       pontuacao.pontos = 0;
       jogo.setup();
       personagem.tornaInvencivel();
       cenaAtual = 'jogo';
       jogo.tocaMusica = false;
       loop();
      }
  }
  
  draw(){
    jogo.draw();
    
    noLoop();
    if(!this.tocaMusica){
        somGameOver.play();
        this.tocaMusica = true;
      }
    
    setTimeout(() => {
      this.imagemDeFundo();
      this.texto();
      this.cont = true;
    }, 2000);
    
  }
  
  imagemDeFundo() {
    image(imagemGameOver, width/4, height/4, width/2, height/2);      
      
  }
  
  texto(){
    textAlign(CENTER);
    textFont(fonteDisc);
    fill('#000');
    textSize(22);
    text('Voce perdeu todas as vidas!', width/2, height/2.6);
    const pontos = pontuacao.getPontos();
    if(pontos > recorde) {
      recorde = pontos;
      textSize(36);
      fill('#FFD700');
      text('Novo Recorde!', width/2, height/2.2);
    }
    fill('#000');
    textSize(28);
    text('Sua pontuação: ' + pontos, width/2, height/1.9);
    text('Recorde atual: ' + recorde, width/2, height/1.8);
    textSize(22);
    text('Toque na tela para recomeçar!', width/2, height/1.65);
    textSize(18);
    text('Um agradecimento especial a toda a equipe da Alura!', width/2, height/1.53);
    text('Produzido @lageoctavio', width/2, height/1.48);
    textSize(45);
    textFont(fonteGameOver);
    text('(Game Over)', width/2, height/2.8);
  }  
  
  
}