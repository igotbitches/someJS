function digital_root(n) {
    function eachNumber(num){
        let count = 0
        let string = String(num).split("")
        for (let i = 0; i < string.length; i++){
            count += Number(string[i])
        }
        return n = count
    }

    while (n > 9){
        n = eachNumber(n)
    }
    return n
}

console.log(digital_root(1275))



//best practice

// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }