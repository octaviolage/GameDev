let contaPulo;
class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.base = height - altura - variacaoY;
    this.y = this.base;    
    this.pulo = 0;
    this.gravidade = 2;
    this.invencivel = false;
  }
 
  pula() {
    if (contaPulo == 0){
      super.frameAtual = 0;
      super.matriz = [[140,140]];
      contaPulo++;
      somPuloNormal.play();
      this.pulo = -22;
    }
    else if (contaPulo == 1){
      super.frameAtual = 0;
      super.matriz = [[0,0]];
      contaPulo++;
      somPuloDuplo.play();
      this.pulo = -16;
    }
  }
  
  dano(){
    super.frameAtual = 0;
    super.matriz = [[0,280]];
    setTimeout(() => {
      super.matriz = matrizPersonagem;
    }, 500);
  }
  
  aplicaGravidade() {
    this.y = this.y + this.pulo;
    this.pulo = this.pulo + this.gravidade;
    
    if(this.y > this.base) {
       this.y = this.base;
    }
    if (this.y == this.base){
      if(contaPulo != 0){
        setTimeout(() => {
          super.matriz = matrizPersonagem;
        }, 125 + (contaPulo-1) * 12);
      }
      contaPulo = 0;
    }
  }
  
  tornaInvencivel() {
   this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  colidindo(inimigo) {
    if(this.invencivel){
      return false;
    }
    const precisao = 0.6;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao);
    return colisao;
  }
  
  buff(powerUp) {
    const precisao = 0.6;
    const colisao = collideRectRect(
      this.x  + this.largura/5,
      this.y + this.altura/10,
      this.largura * 0.6,
      this.altura * 0.9,
      powerUp.x,
      powerUp.y,
      powerUp.largura,
      powerUp.altura
    );
    return colisao;
  }
  
  zeroGravidade() {
    this.gravidade = 0.7;
    setTimeout(() => {
      this.gravidade = 2;
    }, 15000);
  }
}