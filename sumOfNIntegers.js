const sumOfNIntegers = n => n * (n + 1) / 2;
const sumOfNIntegers2 = n => {
    if (n === 1) {
        return n;
    } else {
        return n + sumOfNIntegers2(n - 1);
    }
}

console.log(sumOfNIntegers(10));
console.log(sumOfNIntegers(15));

console.log(sumOfNIntegers2(10));
console.log(sumOfNIntegers2(15));