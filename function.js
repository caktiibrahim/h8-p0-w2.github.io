function shoutOut(halo){
  console.log('Halo function!');
}

shoutOut();

console.log('=============')

var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);

function calculateMultiply(num1,num2){
  console.log(num1 * num2);
}
function hasilPerkalian(calculateMultiply){
  console.log(hasilPerkalian);
}

console.log('=============')

function processSentence(a,b,c,d){
    console.log('Nama saya ' + a + ' umur saya' + ',' + ' alamat saya di ' + c + ',' + ' dan saya punya hobby yaitu ' + d)
  
    return fullSentence = processSentence
  
  }
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence = processSentence(name,age,address,hobby);
  console.log(fullSentence);
  