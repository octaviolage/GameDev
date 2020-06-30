let fixAnimacao = 0;
class Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - altura - variacaoY;
    this.largura = largura;
    this.altura = altura;
    this.alturaSprite = alturaSprite;
    this.larguraSprite = larguraSprite;
    
    this.frameAtual = 0;
  }
  
  calcFrame(num) {
    return this.matriz[this.frameAtual][num];
  }
  
    exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.calcFrame(0), this.calcFrame(1), this.larguraSprite, this.alturaSprite);
    this.anima();
  }
  
  anima() {
    if (fixAnimacao > 3) {
     this.frameAtual++;
      fixAnimacao = 0;
      if(this.frameAtual > this.matriz.length -1) {
        this.frameAtual = 0;
      } 
    }
    else {
     fixAnimacao++; 
    }
  }
}