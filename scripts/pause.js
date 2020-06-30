class Pause {
  constructor(matriz, imagem, x, y, largura, altura){
    this.pause = false;
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.y = y
    this.altura = altura;
    this.largura = largura;
  }
  
  mousePressed(){
    if(this.colidindo()){
      
      if(this.pause == false){
         noLoop();
         this.pause = true;
      }
      else{
         loop();
        this.pause = false;
      }
    }
  }
  
  draw(){
    if(!this.pause){
      image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[0][0], this.matriz[0][1], 42, 38);
    }
    else{
      image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[1][0], this.matriz[1][1], 42, 38);
    }
  }
  
  colidindo() {
    const colisao = collidePointRect(
      mouseX,
      mouseY,
      this.x,
      this.y,
      this.largura,
      this.altura);
    return colisao;
  }
}