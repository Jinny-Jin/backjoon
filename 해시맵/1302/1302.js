const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const map = new Map()
let result = ''
let max = 0

input.shift()
input.sort()

for(let i=0;i<input.length;i++){
    if(!map.has(input[i])){
        map.set(input[i],1)
    }else if(map.has(input[i])){
        map.set(input[i], map.get(input[i])+1)
    }
}

for(let [key, value] of map){
    if(value > max){
        result = key
        max = value
    }
}

console.log(result)