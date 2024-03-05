const filePath = require('path').join(__dirname,'input.txt')
const [num,get,num2,compare] = require('fs').readFileSync(filePath, 'utf-8').split('\n').map(line=> line.trim())
const haveCard = get.split(" ").map(item=>Number(item))
const compareCard = compare.split(" ").map(item=>Number(item))
const map = new Map()

haveCard.forEach(item=>{
    if(map.has(item)){
        map.set(item, map.get(item)+1)
    }else {map.set(item,1)}
})

const result = compareCard.map((item) => map.has(item) ? map.get(item) : 0).join(" ")
console.log(result)
// const map = new Map()
//   const getCard = number[1]
//   const compareCard = number[3]
  
//   compareCard.forEach((c)=>{
//     map.set(c,0)
//     getCard.forEach((g)=>{
//       if(c===g){
//         map.set(c,map.get(c)+1)
//       }
//     })
//   })
  
//  const valueArray = Array.from(map.values())

//  console.log(input)