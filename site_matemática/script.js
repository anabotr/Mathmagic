const gif = document.getElementById("gifs");
let indice = 0
let gifslista = ["gifs/200w.gif", "gifs/animacao-pi.gif", "gifs/espiral-áurea-hcc.gif", "gifs/gif-matematico-12.gif", "gifs/gif-matematico-13.gif", "gifs/gif-matematico-25.gif", "gifs/gif-matematico-31.gif"]



const botaoesquerdagif = document.getElementById('botaoesquerdagif');
botaoesquerdagif.addEventListener('click', passagifesquerda);



function passagifesquerda(){
  if(indice > 0){
    indice -= 1;
    gif.src = gifslista[indice];
  }    
}

const botaodireitagif = document.getElementById('botaodireitagif');
botaodireitagif.addEventListener('click', passagifdireita);

function passagifdireita(){
  if(indice < 6){
    indice += 1;
    gif.src = gifslista[indice];
    console.log(indice);
  }

}