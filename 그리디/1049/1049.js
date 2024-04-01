const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
const [n,m] = input.shift().split(" ")
const arr = input.map((v)=>v.split(" ").map(Number)).sort((a,b)=>a[0]-b[0])
const minSet = arr[0][0]
arr.sort((a,b)=>a[1]-b[1])
const minSingle = arr[0][1]
let answer = 0

const onlySingle = minSingle*n
const onlySet = minSet*(Math.ceil(n/6))
const mix = (minSet*(Math.floor(n/6))) + (minSingle*(n%6))

answer = Math.min(onlySingle,onlySet,mix)

console.log(answer)