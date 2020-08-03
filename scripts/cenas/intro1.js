class Intro1 {
 constructor() {
   this.cont = 0;
 }
  
   mousePressed() {
     if(this.cont >= 35){
      cenaAtual = 'intro2';
    }
  }
  
  draw(){
    this.imagemDeFundo();
    this.texto();
  }
  
  imagemDeFundo() {
    image(imagemIntro1, 0, 0, width, height);      
      
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
      text('Mal amanhecia o dia e nosso herói já estava de volta a estrada.', width/2, height/3.5);
    }
    if(this.cont > 30){
      text('Estava em direção a sua casa para reencontrar sua família que há tempos não via...', width/2, height/2.9);
    }
    if(this.cont >= 35){
      textSize(15);
      text('Toque na tela para continuar', width/2, height*0.96);
    }
  }  
}