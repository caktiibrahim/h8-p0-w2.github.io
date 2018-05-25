
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

var nama = 'cakti'
var peran = 'ksatria'

if(nama === '' && peran === ''){
  console.log('Nama harus di isi!')
}else if(nama === 'cakti' && peran === ''){
  console.log('Selamat datang di dunia Proxytia, ' + nama + '.');
  console.log('Halo ' + nama + ',' + ' pilih peranmu untuk memulai game!');
}else if(peran === 'ksatria'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo Ksatria ' + nama + ',' + ' kamu dapat menyerang dengan senjatamu!');
}else if(peran === 'tabib'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo tabib ' + nama + ',' + ' kamu dapat menolong teman mu yang terluka');
}else if(peran === 'penyihir'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo penyihir ' + nama + ',' + ' ciptakan keajaiban untuk menyerang musuh-musuh mu!');
}
