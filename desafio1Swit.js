let heroi = 'Mec';
let pontos = 8888;
let nivel;

switch (true) {
    case pontos <= 1000:
        nivel = 'Ferro';
        break;
    case pontos >= 1001 && pontos <= 2000:
        nivel = 'Bronse';
        break;
    case pontos >= 2001 && pontos <= 5000:
        nivel = 'Prata';
        break;
    case pontos >= 5001 && pontos <= 7000:
        nivel = 'Ouro';
        break;
    case pontos >= 7001 && pontos <= 8000:
        nivel = 'Platina';
        break;
    case pontos >= 8001 && pontos <= 9000:
        nivel = 'Ascendente';
        break;
    case pontos >= 9001 && pontos <= 10000:
        nivel = 'Imortal';
        break;
    case pontos >= 10001:
        nivel = 'Radiante';
        break;
    default:
        nivel = 'nada';
}

console.log('O Herói de nome: ' + heroi + ', está no nível de ' + nivel);
