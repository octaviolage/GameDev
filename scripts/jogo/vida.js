class Vida {
 constructor(total, inicial) {
   this.total = total;
   this.inicial = inicial;
   this.vidas = inicial;
   
   this.largura = 28;
   this.altura = 25;
   this.xInicial = 20;
   this.y = 30;
   
   this.cont = 0;
 }
  
  draw() {
    for(let i = 0; i < this.vidas; i++) {
       const margem = i * 15;
       const posicao = this.xInicial * (i + 1);
      this.anima(i, posicao, margem);
    }
    
  }
  
  anima(num, posicao, margem){
    if(this.cont < 4 * this.vidas * this.vidas){
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura, 0, 0, 28, 25);
    this.cont++;
    }
    else {
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura, 28, 0, 28, 25);
    this.cont++;
    }
    if ( this.cont >= 4 * this.vidas * this.vidas * 2) {
      this.cont = 0;
    }
  }
  
  somaVida() {
    if(this.vidas < this.total) {
       this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
  }
}