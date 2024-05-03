const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('').sort()
const map = new Map()
const head = []
const body = []
let numb = 0

for(let i=0;i<input.length;i++){
    if(map.has(input[i])){
        map.set(input[i],map.get(input[i])+1)
    }else{
        map.set(input[i],1)
    }
}

for(let value of map.values()){
    if(value%2 === 1){
        numb += 1
    }
}

if(numb > 1) console.log("I'm Sorry Hansoo")
else{
    while(input.length){
        const first = input.shift()
        const index = input.indexOf(first)
        if(index === -1)body.push(first)
        else{
            head.push(first)
            input.splice(index,1)
        }    
    }
    const tail = [...head].reverse().join('')

    console.log(head.join('')+body.join('')+tail)
}