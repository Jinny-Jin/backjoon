const filePath = require('path').join(__dirname,'input.txt')
let input = require('fs').readFileSync(filePath,'utf-8')
let answer = -1
let fiveK = Math.floor(+input/5)

while(fiveK >= 0) {
    let remain = +input - (5*fiveK)

    if(remain%3 === 0){
        answer = remain/3 + fiveK
        break
    }else{
        fiveK = fiveK - 1
    }
}

console.log(answer)