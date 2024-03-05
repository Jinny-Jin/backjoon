const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim())
let index = 0
const testCase = +input[index++]

for(let i=0;i<testCase;i++){
    let num = +input[index++]
    let answer = 1
    let map = new Map()

    for(let j=0;j<num;j++){
        let [name, type] = input[index++].split(" ")
        if(map.has(type)){
            map.set(type,map.get(type)+1)
        }else{
            map.set(type,1)
        }
    }
    for(let [key,value] of map){
        answer = answer * (value+1)
    }
    console.log(map)
    console.log(answer - 1)
}