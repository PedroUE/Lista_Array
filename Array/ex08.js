let idades = ['78', '10', '23', '11', '32', '28'];

let quantidades = idades.length;

for(let i = 0; i < quantidades; i++){
    if(idades[i] >= 18){
        console.log(`Podem apenas os ${idades[i]}`)
    }
}