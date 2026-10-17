function Nave () {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.showFlame = false;
  
  
  this.width = 64;
  this.height = 64;

  
  this.naveNormal = new Image();
  this.naveNormal.src = "NaveNormal.png";

  this.naveFlamita = new Image();
  this.naveFlamita.src = "NaveFlamita.png";
}

Nave.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  
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