function Nave () {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.showFlame = false;
  this.width = 60;
  this.height = 60;
}

Nave.prototype.draw = function (context) {
  var NaveNormal = new Image();
  NaveNormal.src = "NaveNormal.png";
  var NaveFlamita = new Image();
  NaveFlamita.src = "NaveFlamita.png";

  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  
  context.drawImage(NaveNormal, -NaveNormal.width/2,-NaveNormal.height/2);

  if (this.showFlame) {
    context.drawImage(NaveFlamita, -NaveFlamita.width/2,-NaveFlamita.height/2);
  }
  
  context.restore();
};

