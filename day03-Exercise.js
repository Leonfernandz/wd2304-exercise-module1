//answer no 1//
const angka = 9;
for (i = 1; i <= 10; i++) {
    const hasil = angka * i;
    console.log(`${i} * ${angka} = ${hasil}`);
}

//with function
 function angka1 (num1, num2){
    for(i = 0 ; i < num2 ; i ++);
    const hasil1 = num1*i;
    return`${i} * ${num1} = ${hasil1}`
    console.log
 }
console.log(angka1(9,1))

//answer no 2//
// without function
let kataaa = "mahal"
let reveer = kataaa.split("").reverse().join("")
if (kataaa === reveer) {
    console.log(`${kataaa} adalah Palindrome`);
} else {
    console.log(`${kataaa} adalah bukan palindrome`)
}
//with function
function palindrome(kata){
let reveeR = kata.split("").reverse().join("");
let hasilA ="";
if (kata == reveeR){
    hasilA = `${kata} is Palindrome`;
}
else {
    hasilA = `${kata} is not Palindrome`;
}
    return hasilA;
}
console.log(palindrome("MALAM"));
console.log(palindrome("MAHAL"));

//answer no 3//
//without function
let Cm = 1;
let Km = 1 / (10 ** 5);
console.log(`${Cm} Cm sama dengan  ${Km} Km`);

//with function
function convert (angka2){
let hasilB = angka2 / (10**5);
return `${angka2} Cm sama dengan  ${hasilB} Km`
}
console.log(convert(1));

//answer no 4//
const number = 1000;
const result = "Rp. " + number.toFixed(2).replace(".", ",");
console.log(result);

// with function
function convertA (value1){
    const hasilC = "Rp. " + value1.toFixed(2).replace(".",",");
    return `The result converting of ${value1} to idr is ${hasilC}`
}
console.log(convertA(1000))

//answer no 5//
const kata = "Hello World ";
//remove 1 //
const Remove1 = kata.split("ell").join("")
console.log(Remove1);

//answer 6//
const KataA = "hello world"
const removed = KataA.split(" ")
console.log(removed)
console.log(removed.length)
for (var i = 0; i < removed.length; i++){
    console.log(removed[i],removed[0],i)
    removed[i] = removed[i][0].toUpperCase() + removed[i].substring(1)
}
console.log(removed.join(" "))


//answer7//
let kataRev = "anak malam"
let Revv = kataRev.split("").reverse().join("")
console.log(Revv)

let str = "Hello world Hello"
let firstOccurance = "ell"
const resulto = str.replace(firstOccurance, "")
console.log(resulto)