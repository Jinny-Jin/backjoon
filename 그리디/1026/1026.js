const filePath = require('path').join(__dirname,'input.txt')
const [n,A,B] = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const a = A.split(" ").map(Number).sort((a,b)=>b-a)
const b = B.split(" ").map(Number)
const bIndex = [...b].sort((a,b)=>a-b).map(item=>b.indexOf(item))
let answer = 0

for(let i=0;i<n;i++){
    let index = bIndex[i]
    answer = answer + (b[index] * a[i])
}

console.log(answer)