/* eslint-disable no-undef, no-unused-vars */

// Fulgencio orignal
let fulgencioX = 200;
let fulgencioY = 400;

// Clon
let fulgencio2X = 90;
let fulgencio2Y = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230);

  fulgencioX += 3;
  if (fulgencioX > width) {
    fulgencioX = 0;
  }

  // Cuerpo
  stroke(0);
  rectMode(CENTER);
  fill(0);
  rect(fulgencioX, fulgencioY, 40, 100);

  // Cabeza
  fill(255);
  ellipse(fulgencioX, fulgencioY - 70, 100, 100);

  // Ojos
  fill(255);
  rect(fulgencioX - 40, fulgencioY - 70, 50, 25);
  rect(fulgencioX + 40, fulgencioY - 70, 50, 25);

  // Piernas
  line(fulgencioX - 20, fulgencioY + 50, fulgencioX - 50, fulgencioY + 80);
  line(fulgencioX + 20, fulgencioY + 50, fulgencioX + 50, fulgencioY + 80);

  // AQUI EMPIEZA EL CLON
  // Para diferenciarlos le invertí los colores al clon

  fulgencio2Y += 3;
  if (fulgencio2Y > height) {
    fulgencio2Y = 0;
  }
  // Cuerpo Clon
  stroke(0);
  rectMode(CENTER);
  fill(255);
  rect(fulgencio2X, fulgencio2Y, 40, 100);

  // Cabeza Clon
  fill(0);
  ellipse(fulgencio2X, fulgencio2Y - 70, 100, 100);

  // Ojos Clon
  fill(255);
  rect(fulgencio2X - 40, fulgencio2Y - 70, 50, 25);
  rect(fulgencio2X + 40, fulgencio2Y - 70, 50, 25);

  // Piernas Clon
  line(fulgencio2X - 20, fulgencio2Y + 50, fulgencio2X - 50, fulgencio2Y + 80);
  line(fulgencio2X + 20, fulgencio2Y + 50, fulgencio2X + 50, fulgencio2Y + 80);
}
