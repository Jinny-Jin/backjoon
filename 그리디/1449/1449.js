const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim()).flatMap(item=>item.split(" ")).map(Number)
const hole = input.shift()
const tape = input.shift()
let count = 0
let fixed = 0
input.sort((a,b)=>a-b)

for(let i=0;i<hole;i++){
    if(input[i] > fixed){
        fixed = input[i] + tape - 1
        count++ 
    }
}

console.log(count)