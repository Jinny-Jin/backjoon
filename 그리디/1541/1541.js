const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split("-")

const answer = []

input.forEach(item=>{
    if(item.includes('+')){
        let sum = 0
        item = item.split('+').map(Number)
        item.forEach(item=> sum = sum + item)
        answer.push(sum)
    }else{
        answer.push(Number(item))
    }
})

console.log(answer.reduce((acc,cur)=> acc-cur))