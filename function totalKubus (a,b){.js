function totalKubus (a,b){
    let volumeA = a**3
    console.log(volumeA)
    let volumeB = b**3
    console.log(volumeB)
    let hasil = volumeA + volumeB
    console.log(hasil)
    return hasil
}
console.log(totalKubus(4,4))

function tambah(){
let result = 0
for (i=0 ; i < arguments.length ; i++)
result += arguments[i]
return result
}
console.log(tambah(12,13,14,15))
console.log(tambah(2,3,4,5,5))

function make_negative (a){
    let hasiil =""
    if ( a > 0){
        hasiil = -Math.abs(a)
    } 
    else{
        hasiil = a
    }
    return hasiil
}
console.log(make_negative(1))
console.log(make_negative(-5))
console.log(make_negative(0))
console.log(make_negative(0.12))

function factory (n){
   if(n==0)
   return 1
    return n* factory(n-1)
}
console.log(factory(5))

let f = 5
let k =1
for( j = 1; j <= f ; j++)
k*=j
console.log(k)

let power =["Fire", "Water", "Wind", "Earth"]

power.forEach(function(e,i){
console.log(e,i)
})

// function test (a1,a2){
// for (h=0; h<=a1.length;h++)
// test (a1[h],h)
// console.log(a1[h],h)
// }
// function asd (val,idx){

function clone(Arg, Paraa){
    let newArg = []
    for(let idx = o ; idx <= Arg.length; idx++){
        newArg.push(Paraa(Arg[idx],idx))
    }
    return newArg
}
function fnc (vall, idnx){
    return vali*2
}


const examp =[ "Toyota","Honda","Renault","BMW"]
const printData = (data) => {
    examp.sort()
    console.log(examp)
}