const filePath = require('path').join(__dirname,'input.txt')
const [n,input] = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const inputs = input.split(" ").map(Number).sort((a,b)=>a-b)

console.log(inputs)
