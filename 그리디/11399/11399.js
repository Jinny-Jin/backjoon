const filePath = require('path').join(__dirname,'input.txt')
const [n,p] = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const times = p.split(" ").map(Number).sort((a,b)=>a-b)
let total = 0

for(let i=0;i<n;i++){
    total = total + (times[i] * (n-i))
}

console.log(total)