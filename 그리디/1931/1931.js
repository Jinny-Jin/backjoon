const filePath = require('path').join(__dirname,'input.txt')
const [n,...time] = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const times = time.map(item=>item.split(" ").map(Number)).sort((a,b)=>{
    if(a[1]===b[1]){
        return a[0] - b[0]
    }else{
        return a[1] - b[1]
    }
})
let end = 0
let answer = 0

for(let i=0;i<n;i++){
    if(times[i][0] >= end){
        answer++
        end = times[i][1]
    }
}

console.log(answer)