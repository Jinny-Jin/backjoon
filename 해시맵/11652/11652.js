const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const map = new Map()
const n = input.shift()

for(let i=0;i<n;i++){
    let num = BigInt(input[i])
    if(map.has(num)){
        map.set(num,map.get(num)+1)
    }else{
        map.set(num,1)
    }
}

let answer = [...map].sort((a,b) => {
    if(b[1] < a[1]) return -1
    else if(b[1] > a[1]) return 1
    else {
        if(a[0] > b[0]) return 1
        else if(a[0] < b[0]) return -1
        else return 0
    }
})

console.log(answer[0][0].toString())