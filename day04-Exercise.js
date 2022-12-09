//answer1 normal way
let a = 5;
let msg = "";
let code = 1;
for (i = 1; i < a; i++) {
    console.log(i);
    for (j = 1; j <= i; j++) {
        msg += "0" + code + ' ';
        code++
    }
    msg +="\n"
}
console.log(msg);

//function
let codex = 1
let segiTiga = (x) => {
    for (b = 1; b < x; b++) {
        let pesan = ""
        for (c = 1; c <= b; c++) {
            pesan += "0" + codex + " "
            codex++

        }
        console.log(pesan)
    }
}
console.log(segiTiga(5))



//answer no2
//normal way
for (n = 1; n <= 30; n++) {
    if (n % 15 == 0) {
        console.log(`${n} is Fizzbuzz`);
    }
    else if (n % 3 == 0) {
        console.log(`${n} is Fizz`);
    }
    else if (n % 5 == 0) {
        console.log(`${n} is Buzz`);
    }
    else {
        console.log(n);
    }
}

// with function
function fizzbuzz(r){
    for(let i = 1; i <= r; i++){
      if(i % 15 === 0 ){
        console.log(`${i} is FizzBuzz`);
      }else if (i % 3 === 0){
        console.log(`${i} is Fizz`);
      }else if (i % 5 === 0){
        console.log(`${i} is Buzz`);
      }else{
        console.log(i);
      }
    }
  }
  console.log(fizzbuzz(30))

//answer no 3
//normal way
let berat = 70
let tinggi =1.8
let hasil = berat / (tinggi**2)
if (hasil < 18.5) {
    console.log("lessweight")
}
else if (hasil >= 18.5 && hasil <=24.9)
 {
    console.log("Ideal")
}
else if (hasil >= 25.0 && hasil <=29.9) {
    console.log("Overweight")
}
else if (hasil >= 30.0 && hasil <=39.9) {
    console.log("Very Overweight")
}
else {
    console.log("Obese")
}

//with function

function bmi(w,h) {
    let result = w / (h**2)
    if (result < 18.5) {
        return"lessweight"
    }
    else if (result >= 18.5 && result <=24.9)
     {
        return "Ideal"
    }
    else if (result >= 25.0 && result <=29.9) {
        return "Overweight"
    }
    else if (result >= 30.0 && result <=39.9) {
        return " Very Overweight"
    }
    else {
        return "Obese"
    }
}
console.log(bmi(70,1.8))


//answer no 4

function removeOdd(number) {
    return number.filter(m => m % 2 == 0)
}
const evenNumb = removeOdd([1,2,3,4,5,6,7,8,9,10])
console.log(evenNumb)
// berlaku untuk filter, math, for each
//answer no 5
function strToArr(str) {
    return str.split(" ")
}
console.log(strToArr("Hello World"))