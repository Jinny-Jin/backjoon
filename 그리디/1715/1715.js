const filePath = require('path').join(__dirname,'input.txt')
const [n,...cards] = require('fs').readFileSync(filePath,'utf-8').split('\n').map(line=>line.trim()).map(Number)

class PriorityQueue{
    constructor(){
        this.heap = []
    }
    getLength = () => {
        return this.heap.length
    }
    swap = (a,b) => {
        const temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    push = (value) => {
        const {heap} = this

        heap.push(value)
        let i = heap.length - 1
        let parent = Math.floor((i-1)/2)

        while(i>0 && heap[parent] > heap[i]){
            this.swap(i, parent)
            i = parent
            parent = Math.floor((i-1)/2)
        }
    }
    pop = () => {
        const {heap} = this

        if(heap.length <= 1){
            return heap.pop()
        }

        const smallest = heap[0]
        heap[0] = heap.pop()
        let i = 0

        while(true){
            let left = i*2 +1
            let right = i*2 +2

            if(left >= heap.length){
                break
            }
            let next = i

            if(heap[next] > heap[left]){
                next = left
            }
            if(right < heap.length && heap[next] > heap[right]){
                next = right
            }
            if(next === i){
                break
            }
            this.swap(i, next)
            i = next
        }
        return smallest
    }
}

const queue = new PriorityQueue()
let result = 0

cards.forEach(item => {
    queue.push(item)
})
while(queue.heap.length > 1){
    let sum = queue.pop() + queue.pop()
    queue.push(sum)
    result += sum
}

console.log(result)