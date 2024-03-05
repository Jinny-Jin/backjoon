const filePath = require('path').join(__dirname,'input.txt')
const [num,have,num2,compare] = require('fs').readFileSync(filePath, 'utf-8').split('\n').map(line=> line.trim())
const haveCard = have.split(" ").map(item=>Number(item))
const compareCard = compare.split(" ").map(item=>Number(item))
const map = new Map()

haveCard.forEach((item)=>{
    if(map.has(item)){
        map.set(item,map.get(item)+1)
    }else{
        map.set(item,1)
    }
})

const result = compareCard.map(item=>map.has(item) ? map.get(item) : 0).join(" ")

console.log(result)