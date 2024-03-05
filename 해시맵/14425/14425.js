const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split("\n").map(line=>line.trim())
const [num1,num2] = input[0].split(" ").map(item=>Number(item))
const nString = input.slice(1,num1+1)
const mString = input.slice(num1+1)
const map = new Map()
let result = 0

nString.forEach(item=>map.set(item,0))
mString.forEach(item=>{
    if(map.has(item)){
        result++
    }
})

console.log(result)