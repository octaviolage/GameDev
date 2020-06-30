class TelaInicial {
 constructor() {
   botao = new Botao('Iniciar', width/2, height/2);
 }
  
  draw(){
    this.imagemDeFundo();
    this.titulo();
  }
  
  imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
    this.titulo();
    this.iniciar();
  }
  
  titulo(){
    textAlign(CENTER);
    textSize(45);
    textFont(fonteTelaInicial);
    text('wild west', width/2, height/3);
    textSize(120);
    text('EscapE', width/2, height/3.3);
  }
  
  iniciar(){
    botao.y = height/7*5
    botao.draw();
  }
}