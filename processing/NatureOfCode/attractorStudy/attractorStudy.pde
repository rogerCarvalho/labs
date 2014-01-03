// estudando atractors

Corpo c;

void setup(){
  size(640,640);
  background(10,10,10);
  // setup da gravidade Força = ((constanteG *mass1 * mass2)/distancia ao quadrado) * |r|
  // |r| é a magnitude do vetor
  
  c = new Corpo();
  
}

void draw(){
  background(10,10,10, 10);
  
  PVector force = new PVector(.1 , .5);
  c.applyForce(force);
  c.update();
  c.checkEdges();
  c.display();
}
