//variaveis ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

// mostra ator
function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}

//funcoes ator
function movimentaAtor(){
  if(keyIsDown(87)){
    yAtor -= 3;
  }
  if(keyIsDown(83)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if(colisao){
      voltaAtor();
      somColidiu.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtor(){
  yAtor = 366;
}

function incluiPontos(){
  fill(color(255,69,0));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 25);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtor();
    somPontos.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}

