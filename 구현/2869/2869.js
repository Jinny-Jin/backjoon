const filePath = require('path').join(__dirname,'input.txt')
const [a,b,v] = require('fs').readFileSync(filePath,'utf-8').split(' ').map(Number)
const climbADay = a - b
const shouldClimb = v - b

console.log(Math.ceil(shouldClimb/climbADay))