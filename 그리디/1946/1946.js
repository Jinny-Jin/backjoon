const filePath = require('path').join(__dirname,'input.txt')
const [n,...input] = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const arr = []

for(let i=0;i<+n;i++){
    let num = +input[i]
    arr.push(input.splice(i+1,num).map(item=>item.split(" ").map(Number)).sort((a,b)=>a[0]-b[0]))
}

arr.forEach((item)=>{
    let answer = 1
    let base = item[0][1]

    for(let i=1;i<item.length;i++){
        if(item[i][1]<base){
            answer++
            base = item[i][1]
        }
    }
    console.log(answer)
})
