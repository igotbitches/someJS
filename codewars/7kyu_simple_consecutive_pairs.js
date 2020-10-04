// без использования модуля
function pairs(ar){
    let counter = 0;
    for(let i = 0; i < ar.length; i += 2){
        if(ar[i + 1] - ar[i] === 1 || ar[i] - ar[i + 1] === 1){
            counter++;
        }
    }
    return counter;
}

console.log(pairs([1,2,5,8,-4,-3,7,6,5]))


// // можно также использовать матеметические выражения для числа по модулю.
// function pairs(ar) {
//     let counter = 0;
//     for (let i = 0; i < ar.length; i += 2){
//         if (Math.abs(ar[i] - ar[i + 1]) === 1){
//             counter++;
//         }
//     }
//     return counter;
// }