// require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const people = input.slice(1).sort()
const map = new Map()
const result = []

people.forEach(item=>{
    if(map.has(item)){
        map.set(item,map.get(item)+1)
    }else if(!map.has(item)){
        map.set(item,1)
    }
})

for(let [key,value] of map){
    value>1 && result.push(key)
}

console.log(result.length + "\n" + result.join("\n"))