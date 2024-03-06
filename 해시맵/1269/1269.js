const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const a = input[1].split(" ").map(Number)
const b = input[2].split(" ").map(Number)
const map = new Map()
let result = 0

a.forEach(item=>map.set(item,1))
b.forEach(item=> {
    if(!map.has(item)){
        map.set(item,1)
    }else{
        map.set(item,map.get(item)-1)
    }
})

for(let i of map.values()){
    i > 0 && result++
}

console.log(result)