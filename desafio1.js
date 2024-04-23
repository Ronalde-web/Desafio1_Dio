let heroi = 'Mec'
let pontos = 1

if (pontos <= 1000) {
    console.log('O Herói de nome: ' + heroi + ', está no nível de ' + 'Ferro')
}

else if (pontos >= 1001 || pontos <= 2000){
    console.log('O Herói de nome: ' + heroi + ', está no nível de ' + 'Bronse')
}
else if (pontos >= 2001  || pontos <= 5000){
    console.log('O Herói de nome: ' + heroi + ', está no nível de ' + 'Prata')
}
else if (pontos >= 5001 || pontos <= 7000){
    console.log('O Herói de nome: ' + heroi + ', está no nível de ' + 'Ouro')
}
else if (pontos >= 7001 || pontos <= 8000){
    console.log('O Herói de nome: ' + heroi + ', está no nível de ' + 'Platina')
}
else if (pontos >= 8001 || pontos <= 9000){
    console.log('O Herói de nome: ' + heroi + ', está no nível de ' + 'Ascendente')
}
else if (pontos >= 9001 || pontos <= 1000){
    console.log('O Herói de nome: ' + heroi + ', está no nível de ' + 'Imortal')
}
else if (pontos >= 10001){
    console.log('O Herói de nome: ' + heroi + ', está no nível de ' + 'Radiante')
}
else {
    console.log('nada')
}