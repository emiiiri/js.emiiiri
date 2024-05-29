let xBolinha = 300;
let yBolinha = 200;
let diametro = 12;
let raio = diametro / 2;


let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;

let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaquete = 1;
let yRaquete = 150;

let xRaqueteOponente = 589;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false 

let meusPontos = 0;
let pontosDoOponente = 0;


let raquetada;
let SuperMarioBros;
let ponto;

function preload(){
  notaround = loadSound("SuperMarioBros.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete, color("cyan"));
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente, color("pink"));
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  incluiPlacar();
  marcaPonto();
  letras();
  fill("white")
  rect(300,0,1,400);
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha+raio>width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
}
  if (yBolinha+raio>height ||  yBolinha-raio < 0) {
    velocidadeYBolinha *= -1;
  }
}
 
function mostraRaquete(x,y,color) {
    fill (color)
    rect( x, y , raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

  function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + raqueteComprimento  && yBolinha - raio < yRaquete + raqueteAltura  && yBolinha + raio > yRaquete){
      velocidadeXBolinha*= -1;
      raquetada.play();

    }
  }

function verificaColisaoRaquete(x,y) {
  colidiu = collideRectCircle (x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();

    }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}
  
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(15);
    fill("cyan");
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 15);
    fill("pink");
    rect(430, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 450, 15);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 1){
    pontosDoOponente += 1;
    ponto.play();
  }
}
function letras(){
  let frase = "MEUS PONTOS";
  let xf = 115; 
  let yf = 40; 
  textSize(15);
  textAlign(LEFT, TOP);
  fill("white"); 
  text(frase, xf, yf);
  
  let frase2 = "PONTOS DO OPONENTE";
  let xf2 = 375; 
  let yf2 = 40; 
  textSize(15);
  textAlign(LEFT, TOP);
  fill("white"); 
  text(frase2, xf2, yf2);
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
