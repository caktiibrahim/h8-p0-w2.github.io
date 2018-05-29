console.log('LOOPING PERTAMA')
var i = 2
while(i <=20){
  console.log(i + '- ' + 'I love coding')
  i+=2
}

console.log('LOOPING KEDUA')
var i = 20
while(i > 1){
    console.log( i +'- ' + 'I will become fullstack developer');
    i-=2
}

console.log('==================================')

console.log('LOOPING PERTAMA')
for(var i = 1; i <= 20; i++){
  console.log(i + '- ' + 'I love coding')
}
console.log('LOOPING KEDUA')
for(var i = 20; i > 0; i--){
  console.log( i + '- ' + 'I will become fullstack developer')
}

console.log('==================================')

for(var angka = 1; angka <= 100; angka++){
  if((angka%2)==1){
    console.log(angka + ' ganjil');
  }
  else if ((angka%2)===0) {
    console.log(angka + ' genap');
  }
}

for(var deret = 1; deret <=100; deret++){
  if(deret % 2 === 0){
    console.log('counter sekarang ' + deret + ' = Genap');
  }else if(deret % 2 === 1){
    console.log('counter sekarang ' + deret + ' = Ganjil');
  }
}


for(var deret = 1; deret <=100; deret+=2){
  if(deret % 3 === 0){
    console.log(deret + ' kelipatan ' + deret);
  }
}

for(var deret = 1; deret <=100; deret+=2){
  if(deret % 3 === 0){
    console.log(deret + ' kelipatan ' + '3');
  }
}
for(var deret = 1; deret <=100; deret+=5){
  if(deret % 6 === 0){
    console.log(deret + ' kelipatan ' + '6')
  }
}
for(var deret = 1; deret <=100; deret+=9){
  if(deret % 10 === 0){
    console.log(deret + ' kelipatan ' + '10')
  }
}