const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8')
let n = Number(input)
let answer = 0
let five = Math.floor(n/5)

if(n === 1 || n === 3){
    answer = -1
}

n = n%five

if(n%2 === 1){
    five = five - 1
    n = n + 5
}

answer = five + n/2

console.log(answer)