//no1. area of Reectangle//
//without function
let panjang = 25;
let lebar =25;
const Area = panjang * lebar;
console.log(Area);
console.log(`area of Rectagular which has ${panjang} and ${lebar} is ${Area}`);
 
// with function
function areaRect(Panjang1,Lebar1){
    let AreaR = Panjang1*Lebar1;
    let Pesan1 = `area of Rectagular which has ${Panjang1} and ${Lebar1} is ${AreaR}`;
return Pesan1;
}
console.log(areaRect(35,25));

//no2. Parimeter of Rectangle//
//without function
const Pari = 2*(panjang + lebar);
console.log(Pari);
console.log(`Parimeter of Rectangular which has ${panjang} and ${lebar} is ${Pari}`);

//with function
function parim (panjangA , lebarA){
    let parimA = 2*(panjangA + lebarA);
    let pesan2 = `Parimeter of Rectangular which has ${panjangA} and ${lebarA} is ${parimA}`;
    return pesan2;
}
console.log(parim(25,25));

//no 3. diameter//
//without function
let Radius = 5;
const Diameter = 2*Radius;
console.log(Diameter);
console.log(`Diameter of Circle if the radius have a value ${Radius} is ${Diameter}`);

//with function
function Diameter1 (Radius1){
    let DiameterA = 2*Radius1;
    let pesan3 = `Diameter of Circle if the radius have a value ${Radius1} is ${DiameterA}`;
    return pesan3;
}
console.log(Diameter1(5));

//circumrference//
//without function
const Pi = 22/7;
const Circum = 2*Pi*Radius;
let preci = Circum.toPrecision(3)
console.log(preci);
//or//
console.log(Circum.toPrecision(3))
console.log(`Circumference of Circle if the value of Radius ${Radius} is ${Circum.toPrecision(3)}`);

//with function
function circumF (Radius2){
    const hasilCircum = 2*3.14*Radius2;
    return  `Circumference of Circle if the value of Radius ${Radius2} is ${hasilCircum.toPrecision(3)}`;
}
console.log(circumF(5));

//Area//
//without function
const Area1 = (Pi)*(Radius**2);
console.log(Area1.toPrecision(3));
console.log(`Area of Circle if the value of Radius ${Radius} is ${Area1.toPrecision(3)}`);

//with function
function Area2 (Radius3){
    const hasilArea = 22/7*(Radius3**2);
    return `Area of Circle if the value of Radius ${Radius3} is ${hasilArea.toPrecision(3)}`;
}
console.log(Area2(5));

//answer no 4//
//without function
let x = 30;
y = 25;
const z = 180 -(x+y);
console.log(z);
console.log(`If triangle has an Angle 1 is ${x} and Angle 2 is ${y} so the other Angle is ${z} `);

//with finction
function triangle (angleA,angleB){
    const angleC = 180 - (angleA + angleB)
    return `If triangle has an Angle 1 is ${angleA} and Angle 2 is ${angleB} so the other Angle is ${angleC} `
}
console.log(triangle(30,25))
//answer no 5//
//without function
let date1 = new Date("2022-08-11");
let date2 = new Date("2022-10-11");
const betweendate = Math.abs(date1-date2);
console.log(betweendate)
const betweenday = Math.round (betweendate / (24*3600*1000));
console.log(betweenday)
console.log(`The day difference between ${date1} and ${date2} is ${betweenday} days`);

//with function
function betweenday1 (dateA, dateB){
    const betweenDate1 = Math.abs(dateA-dateB);
    const betweenDays = Math.round(betweenDate1 / (24*3600*1000));
    return `The day difference between ${new Date(dateA)} and ${new Date(dateB)} is ${betweenDays} days`
}
console.log(betweenday1("2022-08-11","2022-10-11"))

// no6//
//without Function
let day3 = 400;
const year = Math.floor(day3/365);
console.log(year);
const month = Math.floor((day3 % 365) / 30);
console.log(month)
const days = Math.floor((day3 % 365)%30);
console.log(days);
console.log(`${year} year, ${month} Month, ${days} Day.`);

// with Function
function timeA (day4){
const years = Math.floor(day4/365);
const months = Math.floor((day4 % 365)/30);
const dayS = Math.floor((day4 % 365)%30);
return `${day4} days is ${years} year, ${months} Month, ${dayS} Day.`
}
console.log(timeA(400))