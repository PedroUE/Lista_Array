let jogos = ['Alan Wake 2', 'minecraft', 'warzone'];
let jogoFavorito = 'warzone'

let Favorito = jogos.length;

for(let i = 0; i < Favorito; i++){
    if(jogoFavorito === jogos[i]){
        console.log(`Aparece no ranking em`, i + 1)
    }
}