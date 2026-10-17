function Nave () {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.showFlame = false;
  
  // Tamaño aumentado un 100% (de 32px a 64px)
  this.width = 64;
  this.height = 64;

  // Carga previa de imágenes
  this.naveNormal = new Image();
  this.naveNormal.src = "NaveNormal.png";

  this.naveFlamita = new Image();
  this.naveFlamita.src = "NaveFlamita.png";
}

Nave.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  // Dibujado centrado con dimensiones de 64x64
  context.drawImage(
    this.naveNormal, 
    -this.width / 2, 
    -this.height / 2, 
    this.width, 
    this.height
  );

  if (this.showFlame) {
    context.drawImage(
      this.naveFlamita, 
      -this.width / 2, 
      -this.height / 2, 
      this.width, 
      this.height
    );
  }

  context.restore();
};