var i;
var fib = [];
fib[0] = 1;
fib[1] = 1;
let sum = fib[0] + fib[1];
for (i = 2; i < 4; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
    sum += fib[i];
}
console.log("tổng là:");
console.log(sum);
//# sourceMappingURL=main.js.map