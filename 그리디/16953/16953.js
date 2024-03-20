const filePath = require('path').join(__dirname,'input.txt')
let [a,b] = require('fs').readFileSync(filePath,'utf-8').split(" ").map(line=>line.trim()).map(BigInt)
let answer = 0

while(b>a){
    if(b%10n === 1n){
        b = b/10n
        answer++
    }else if(b % 2n === 0n){
        b = b/2n
        answer++
    }else{
        console.log(-1)
        return
    }
}

console.log(a === b ? answer + 1 : -1)