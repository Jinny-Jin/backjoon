const filePath = require('path').join(__dirname,'input.txt')
const [n,a,b] = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const road = a.split(" ").map(BigInt)
const price = b.split(" ").map(BigInt)
let answer = 0n
let curPrice = price[0]

for(let i=0;i<n-1;i++){
    answer += curPrice * road[i]

    if(curPrice > price[i+1]){
        curPrice = price[i+1]
    }
}

console.log(String(answer))