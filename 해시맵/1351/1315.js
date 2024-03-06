const filePath = require('path').join(__dirname,'input.txt')
const [n,p,q] = require('fs').readFileSync(filePath,'utf-8').split(" ").map(Number)
const map = new Map()
map.set(0,1)

function solution(n){
    if(map.has(n)){
        return map.get(n)
    }
    const i = solution(Math.floor(n/p)) + solution(Math.floor(n/q))
    map.set(n,i)

    return i
}


console.log(solution(n))