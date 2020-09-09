function isPrime(num) {
    function setPrime(counter, acc) {
        if (counter <= 1) {
            return false;
        }
        for (acc; acc < num; acc += 1) {
            if (num % acc === 0) {
                return false;
            }
        }
        return true;
    }
    return setPrime(num, 2);
}


console.log(isPrime(1))
console.log(isPrime(7))
console.log(isPrime(10))
console.log(isPrime(2017))