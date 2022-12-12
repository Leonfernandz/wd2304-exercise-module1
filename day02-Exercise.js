//answer no1//
// without function
let Celcius = 40;
let Fahrenheit = Celcius*9/5 + 32
console.log(Fahrenheit);
console.log(`The value of ${Celcius} degree Celcius is ${Fahrenheit} degree Fahrenheit`);

// with function
function fahrenheitDegree(celciusDegree){
    const convert1 = celciusDegree*9/5 +32
    return `The value of ${celciusDegree} degree Celcius is ${convert1} degree Fahrenheit`
}
console.log(fahrenheitDegree(40))


//no 2//
// without function
for (i=0 ;i<=10;i++){
if
    (i % 2 == 0){
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}
//atau//
let angka = 2;
if (angka %2 ==0){
    console.log(`${angka} is Even`);
}
else{
    console.log(`${angka} is odd`);
}

// with function
function evenOdd (numBer){
    if ( numBer % 2 == 0){
        hasil1 = `${numBer} is Even`
    }
    else {
        hasil1 = `${numBer} is Odd`
    }
    return hasil1
}
console.log(evenOdd(5))


//answer no3//
//without function
let angka1 = 7
let isPrime = true
if ( angka1 === 1){
    console.log("")
}
else if (angka1 > 1);{
    for(let i =2 ; i < angka1 ;i++){
if(angka1 % i == 0){
    isPrime = false;
    break;
}
    }
}
if (isPrime){
    console.log(`${angka1} is Prime number`);
}
else {
    console.log(`${angka1} is not Prime Number`);
}
//with function
function primeNum (angka2){
    let yaPrime = true
    if( angka2 > 1){
        for (let j = 2 ; j < angka2 ; j++){
            if(angka2%j == 0){
                yaPrime = false;
                break
            }
        }
    }if (yaPrime){
        hasil3 =`${angka2} is prime number`
    }
    else {
        hasil3 = `${angka2} is not prime number`
    }
    return hasil3
    }
    console.log(primeNum(7));
    console.log(primeNum(10))

//answer no 4//
//without function
let sum = 0;
const n = 6;
for (i = 1 ; i <= n ; i++){
    sum+= i
    console.log(sum)
}
console.log(`Result of contiously sum from ${n} is ${sum}`);

//with function
function sumN(angka3){
    let sumA = 0;
    for (i=1 ; i <= angka3 ; i++){
        sumA+= i
        console.log(sumA)
    }
    return`Result of contiously sum from ${angka3} is ${sumA}`
}
console.log(sumN(6))

//answer 5//
// without function
let numero = 5
let nombre = 1
for (i = 1; i <= numero ; i++){
    nombre*= i
    console.log(nombre)
}
console.log(`The factorial of ${numero} is ${nombre}`);
//with function
function factorial (angka4){
    let nomor1 =1
    for ( i=1; i <= angka4; i++){
        nomor1*=i
    }
    return `The factorial of ${angka4} is ${nomor1}`
}
console.log(factorial(5));

//answer no 6
let numA = 8
let num1 = 0
let num2 = 1
let next;
for(i=1;i<numA;i++){
    
}

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
console.log (fibonacci(8))