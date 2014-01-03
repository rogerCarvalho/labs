// classe Corpo é um objeto genérico
class Corpo{
  // declaração das variáveis do Corpo
  PVector location;
  PVector velocity;
  PVector accel;
  float mass;
  
  // constructor
  Corpo(){
    location = new PVector(320, 20);
    velocity = new PVector(1,0);
    accel = new PVector(0,0);
    mass = 1;
  }
  
  //métodos 
  
  void applyForce(PVector force){
   // divide a força pela massa para simular comportamento
   // da mesma força aplicada à um objeto mais pesado
   PVector f = PVector.div(force,mass);
   // adiciona a força à aceleração
   accel.add(f);
  }
  
 void update(){
   // update nas variaveis do objeto após a aplicação da força
   // aplica a aceleração sobre a velocidade
   velocity.add(accel);
   // aplica a velocidade sobre a localização
   location.add(velocity);
   // reseta a aceleração para mantê-la igual à força aplicada
   // e não incrementada pela força em todo loop
   accel.mult(0);
 }
 
 void display(){
   // visual do corpo
   stroke(0);
   strokeWeight(2);
   fill(127);
   ellipse(location.x, location.y, 16, 16);
 }

void checkEdges(){
  // verificação para o corpo não escapar da area visivel
  if(location.x > width) {
    velocity.x *= -1;
  }else if( location.x <0){
    velocity.x *= -1;
  }
  
  if(location.y > height){
   
    velocity.y *= -1;
    location.y = height;
  }
} 
  
}
