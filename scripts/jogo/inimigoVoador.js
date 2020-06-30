class InimigoVoador extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.velocidade = velocidade;
    this.x = width*1.65;
    
  }
  
  move() {
    this.x = this.x - this.velocidade;
    
    if(this.x < - this.largura - this.velocidade) {
      this.x = width*2.67;
    }
  }
}