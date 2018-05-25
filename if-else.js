
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
