const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').toString().trim()
const map = new Map()

for(let i=0;i<input.length;i++){
    for(let j=i+1;j<=input.length;j++){
        let sliced = input.slice(i,j)
        if(!map.has(sliced)){
            map.set(sliced,sliced)
        }
    }
}
console.log(map.size)