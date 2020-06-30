class Pontuacao {
 constructor() {
  this.pontos = 0; 
 }
  
  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(30);
    text(parseInt(this.pontos), width-30, 50); 
  }
  
  adicionarPonto(){
   this.pontos = this .pontos + 0.2;
  }
  
  getPontos(){
    return parseInt(this.pontos);
  }
  
  somaPontos(){
    this.pontos += 50;
  }
}