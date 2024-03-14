const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
let [n,k] = input.shift().split(" ").map(Number)
let answer = 0

input.sort((a,b)=>b-a)

for(let i=0;i<input.length;i++){
    let num = Math.floor(k/Number(input[i])) 

    if(num > 0){
        answer = answer + num
        k = k - (input[i]*num)
    }
}
console.log(answer)