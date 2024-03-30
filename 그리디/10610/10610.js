const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').toString().trim().split('').map(Number).sort((a,b)=>b-a)
const sum = input.reduce((acc,cur)=>acc+cur,0)

if(sum%3 === 0 && input.includes(0)){
    console.log(input.join(""))
}else{
    console.log(-1)
}