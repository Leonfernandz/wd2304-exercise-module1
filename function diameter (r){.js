function diameter (r){
    return 2*r
}
console.log(diameter(3))

function keliling (r, cbfn){
    return 3.14*(cbfn(r))
}
console.log(keliling(3,diameter))



let product = [
    {
        name:"Hoodie",
        stock: 12,
        price: 75000
    },
    {
        name:"Sepatu",
        stock: 10,
        price : 80000
    }
]

function a(product,index){
    return `${index+1}. ${product.name}, available stock ${product.stock}, dengan harga ${product.price.toLocaleString("id")}`
}
let b = product.map(a)
console.log(b.join('\n'))


let amount = 0;
product.forEach(val => amount += val.stock)
console.log (`Total Stock -->` , amount)

//splice
let charac = ["Venti","Zhongli","Ei","Nahida"]
charac.splice(2,0, "Makoto")// untuk menyisipkan atau menambah hilangkan nilai dalam array
// kenapa 2.0 karena mau menyisipkan "makoto di index 2 tanpa menghapus, index dibelakangnya
// jika ingin menghilangkan ei maka ditulis 2.1 dan jika ingin menghilangkan ei dan nahida maka ditulis 2.2 
console.log(charac.join("-"))

//slice
//kegunaan untuk memotong atau mengambil nilai index yang diinginkan
let chara2 =["Diluc","Jean","Lisa","Kaeya"]
// jika ingin mengambil atau menampilkan saja maka menggunakan slice seperti
let charaSlice = chara2.slice(1,3)
console.log(charaSlice.join(" & "))
//join  digunakan untuk merubah array menjadi string

//push
// untuk menambahkan element baru pada index bagian belakang
let chara3 =["Klee","Diona","Qiqi","Sayu"]
chara3.push("Dori")
console.log(chara3.join(" - "))
// maka dori ditambahkan setelah sayu

//pop
// untuk menghilangkan elamenet pada index di bagian belakang
chara3.pop()
console.log(chara3)
// maka dori hilang dari element index , jika ingin menghilangkan sayu maka lakukan pop sekali lagi dan seterusnya

//unshift
//untuk menambahkan element, sama seperti push tapi element yang ditambahkan berada diposisi pertama pada index/ index 0
let chara4 =["Kazuha","Albedo","Xiao"]
chara4.unshift("Wanderer")
console.log(chara4)
//maka wanderer ditambahkan dan berada di posisi index 0

//shift
//untuk menghilangkan element dalam array sama seperti pop, tetapi element yang dihilangkan berada pada posisi pertama
chara4.shift()
console.log(chara4)
//wanderer yang berada di posisi index 0 hilang

//sort 
//method yang digunakan untuk mengurutkan posisi yang teracak pada index
function angkaAcak(x){
     return x.sort()
}
console.log(angkaAcak([1,5,8,4,3,2,6,9]))
//maka hasilnya akan tersusun rapi

// filter
//digunakan untuk memfilter atau menyaring element khusus yang kita inginkan pada suatu array
function usingFilter(number) {
    return number.sort().filter(m => m > 3)
}
console.log(usingFilter([5,7,8,3,2,6,4,1]))
//dalam kasus ini akan mengurutkan angka yang teracak menjadi tersusun rapi
//dan memfilternya karena yang diminta angka yang lebih dari 3 maka akan terdisplay angka2 yang lebih dari 3

//find 
//find digunakan untuk mencari suatu element tapi berbeda dengan filter yang dapat menampung banyak element
//find hanya dapat menampung atau mendisplay satu element saja
function usingFind(numBer){
    return numBer.find(n => n > 6)
}
console.log(usingFind([5,9,8,3,2,4,1,7]))
//yang keluar adalah angka 9
// karena kita ingin mencari angka yang lebih besar dari 6, dan angka pertama yang lebih besar dari 6 dari data
//tersebut adalah 9
