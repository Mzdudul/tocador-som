const botaoPlayPause = document.getElementById ("play-pause");
const botaoAvancar = document.getElementById ('proximo');
const botaoVoltar = document.getElementById ('anterior');

const audioCapitulo = document.getElementById ("audio-capitulo");

const numeroDeCapitulos = 10;
let taTocando = 0;
let CapituloAtual = 1;

function tocarFaixa (){
  audioCapitulo.play();
  botaoPlayPause.classList.remove('bi-play-circle-fill');
  botaoPlayPause.classList.add('bi-pause-circle-fill');
}
function pausarFaixa () {
    audioCapitulo.pause ();
    botaoPlayPause.classList.add('bi-play-circle-fill');
  botaoPlayPause.classList.remove('bi-pause-circle-fill');
}
function tocarOuPausar(){
if (taTocando === 0){
    tocarFaixa();
    taTocando = 1;
} else{
    pausarFaixa();
    taTocando = 0;
}
}
function trocarNomeFaixa(){
    numeroDeCapitulos.innerText = 'Capítulo ' + CapituloAtual;
}

function proximaFaixa (){
    if(CapituloAtual === numeroDeCapitulos ){

        CapituloAtual = CapituloAtual + 1;
    } else{
        CapituloAtual = CapituloAtual + 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + CapituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
    
}
function voltarFaixa (){
    if(CapituloAtual === 1 ){
        CapituloAtual = numeroDeCapitulos;
    } else{
        CapituloAtual = CapituloAtual - 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + CapituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
  
   
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener ("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);



