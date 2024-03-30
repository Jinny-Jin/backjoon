const filePath = require('path').join(__dirname,'input.txt')
const [n,...rope] = require('fs').readFileSync(filePath,'utf-8').toString().trim().split('\n').map(Number)
const weight = []

rope.sort((a,b)=>a-b)

for(let i=0;i<n;i++){
    weight.push(rope[i]*(n-i))
}

console.log(Math.max(...weight))