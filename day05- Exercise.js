//answer no 1

let arrValue = [ 2,1,8,9,0] //=> input data
//without sort
function withoutSort(arr){
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    sum = 0
    for (let i= 0 ; i < arr.length ;i++){
        sum+=arr[i]
        average = sum / arr.length
    }
return["The data has a Highest number: " + max, "lowest number: " + min, " and average: " + average].toString()
}
console.log(withoutSort([2,1,8,9,0]))

//with sort
function withSort(arr){
    let min =""
    let max =""
    let sum = 0
    arr.sort()
    console.log(arr)
    min = arr[0]
    max = arr[arr.length-1]
    for(l=1 ;l<arr.length;l++){
        sum+=arr[l]
        average = sum / arr.length
    }
    return["The data has a Highest number: " + max, "lowest number: " + min, "and average: " + average]
}
console.log(withSort([2,1,8,9,0]).toString())


//answer no 2
// let element = ["Anemo","Geo","Electro","Dendro","Hydro","Pyro","Cryo"] => input data
function vision(ary){
    let word = ""
    for(i=0 ; i < ary.length ; i++){
        if (i == ary.length -1){
            word+= "and " + ary[i]
        }
        else if (i == ary.length -2){
            word+= ary[i] + " "
        }
        else {
            word+= ary[i] + ", "
        }
    }
    return word
}
console.log(vision(["Anemo","Geo","Electro","Dendro","Hydro","Pyro","Cryo"]))

//answer no 3
function sumArray(arrayA, arrayB) {
    var c = [];
    for (var i = 0; i < Math.max(arrayA.length, arrayB.length); i++) {
      c.push((arrayA[i] || 0) + (arrayB[i] || 0));
    }
    return c;
}
console.log(sumArray([1,2,3],[3,2,1,2]))

//answer no 5

let town = ["Mondstad", "Liyue","Inazuma"];
function comparison ( val, arr){
    for (i=0; i<arr.length; i++)
    {
        if (val == town[i])
        {
            return "world sudah ada"
}
    }
    town.push(val)
    return town
}
console.log(comparison("Sumeru",town))