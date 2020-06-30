class Intro2 {
 constructor() {
   this.cont = 0;
 }
  
   mousePressed() {
     if(this.cont >= 35){
      cenaAtual = 'jogo';
    }
  }
  
  draw(){
    this.imagemDeFundo();
    this.texto();
  }
  
  imagemDeFundo() {
    image(imagemIntro2, 0, 0, width, height);      
      
  }
  
  texto(){
    if(this.cont < 35){
      this.cont++;
    }
    textAlign(CENTER);
    textFont(fonteDisc);
    fill('#fff');
    textSize(22);
    if(this.cont > 15){
      text('Mas foi surpreendido por alguns índios que acreditavam se tratar de uma invasão a suas terras.', width/2, height/3.4);
    }
    if(this.cont > 30){
      text('Agora, com sua montaria abatida pelos nativos, nosso herói terá que passar por inimigos e', width/2, height/3.1);
      text('obstáculos para sair vivo dessa!', width/2, height/2.8);
    }
    if(this.cont >= 35){
      textSize(15);
      text('Toque na tela para iniciar o jogo.', width/2, height*0.96);
    }
  }  
}