function persistence(num) {
    let splitNum = 1;
    let counter = 0;

    while (String(num).split("").length !== 1){
        for(let i = 0; i < String(num).split("").length; i++){
            splitNum *= Number(String(num).split("")[i])
        }
        num = splitNum
        splitNum = 1;
        counter += 1
    }
    return counter
}

console.log(persistence(999))
console.log(persistence(25))
console.log(persistence(4))
console.log(persistence(39))


//best practice
// function persistence(num) {
//     var times = 0;
//
//     num = num.toString();
//
//     while (num.length > 1) {
//         times++;
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
//
//     return times;
// }