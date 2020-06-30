class PowerUp extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, funcao) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.x = width;
    this.funcao = funcao;
    
  }
  
  move() {
    this.x = this.x - 6;
  }
  
  mudaY(valor) {
    super.y = valor;
  }
  
  aparece() {
    if(this.x < - this.largura) {
      this.x = width; 
    }
  }
  
}