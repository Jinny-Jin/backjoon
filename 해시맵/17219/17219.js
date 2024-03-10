const filePath = require('path').join(__dirname,'input.txt')
const input = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=> line.trim())
const map = new Map()

input.shift()

for(let i=0;i<input.length;i++){
    let [site, password] = input[i].split(" ")

    if(map.has(site)){
        console.log(map.get(site))
    }else if(!map.has(site)){
        map.set(site,password)
    }
}