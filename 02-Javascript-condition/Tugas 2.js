//Soal 1
let namaLengkap = "Yazid Alif Anugrah";
console.log(namaLengkap);

//Soal 2
console.log();
console.log("Soal 2");

let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 

let outputGabunganVariabel = word + " " + second + " " + third;
console.log(outputGabunganVariabel);

//Soal 3
console.log();
console.log("Soal 3");

let hello = 'hello';
let world = 'world!!!!';

let output = '${hello} ${world}'
console.log(output)

//Soal 4
console.log();
console.log("Soal 4");

let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let kelilingPersegiPanjang = 2 * ( panjangPersegiPanjang + lebarPersegiPanjang );

console.log(kelilingPersegiPanjang)

//Soal 5
console.log();
console.log("Soal 5");
let sentences= 'wah javascript itu keren sekali'; 

let firstWord = sentences.substring(0, 3); 
let secondWords = sentences.substring(2, 1); // do your own! 
let thirdWords = sentences.substring(5, 4); // do your own! 
let fourthWords = sentences.substring(1, 0); // do your own! 
let fifthWords = sentences.substring(20, 34); // do your own! 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

//Soal 6
console.log();
console.log("Soal 6");
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];

var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24];
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord);

//Soal 7
console.log();
console.log("Soal 7");

let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil);

//Soal 8
console.log();
console.log("Soal 8");

var nilaiDoe = 50;

if (nilaiDoe >= 80) {
  console.log("Indeks: A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
  console.log("Indeks: B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
  console.log("Indeks: C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
  console.log("Indeks: D");
} else {
  console.log("Indeks: E");
}

//Soal 9
console.log();
console.log("Soal 9");

let angka = 2;

angka === 2 
  ? console.log("angka nya 2") 
  : console.log("bukan angka 2");

//Soal 10
console.log();
console.log("Soal 10");

var traffic_lights = "red";

switch (traffic_lights) {
  case "red":
    console.log("berhenti");
    break;
  case "yellow":
    console.log("hati-hati");
    break;
  case "green":
    console.log("berjalan");
    break;
}
