let countBits = function(n) {
    let counter = 0;
    while (n !== 0){
        if(n % 2 === 0){
            n /= 2;
        }else{
            counter++
            n = (n-1) / 2;
        }
    }
    return counter;
};

console.log(countBits(1234))