//answer1 
//function
function triangle (angkaS){
    let value = 1;
    let result = ""
    for(i=0;i<angkaS;i++){
        for(j=0;j<=i;j++){
            if(value > 9){
                result += value++ + " ";
                console.log(result)
            }
            else{
                result+="0" + value++ +" "
                console.log(result)
            }
        }
        result +="\n"
    }
    return result
}
console.log(triangle(4))



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
    let hasilA
    for(let i = 1; i <= r; i++){
      if(i % 15 === 0 ){
       hasilA = `${r} is FizzBuZZ`
      }else if (i % 3 === 0){
       hasilA = `${r} is Fizz`
      }else if (i % 5 === 0){
       hasilA = `${r} is BuZZ`
      }else{
        hasilA = "Neither all"
      }
    }
    return hasilA
  }
  console.log(fizzbuzz(30));
  console.log(fizzbuzz(10));
  console.log(fizzbuzz(9));

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
    let hasilB =""
    let result = w / (h**2)
    if (result < 18.5) {
        hasilB ="lessweight"
    }
    else if (result >= 18.5 && result <=24.9)
     {
        hasilB ="Ideal"
    }
    else if (result >= 25.0 && result <=29.9) {
        hasilB ="Overweight"
    }
    else if (result >= 30.0 && result <=39.9) {
        hasilB =" Very Overweight"
    }
    else {
        hasilB ="Obese"
    }
    return hasilB
}
console.log(bmi(70,1.8))


//answer no 4

function removeOdd(number) {
    return number.filter(m => m % 2 == 0)
}
console.log(removeOdd([1,2,3,4,5,6,7,8,9,10]))
// berlaku untuk filter, math, for each

//answer no 5
function strToArr(str) {
    return str.split(" ")
}
console.log(strToArr("Hello World"))