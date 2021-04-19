// 通过 Object 实现
class Queue {
    constructor(){
        this.tail = 0;
        this.head = 0;
        this.items = {};
    }
    enqueue(element){
        this.items[this.tail] = element;
        this.tail += 1;
    }
    dequeue(){
        if(this.isEmpty()) return undefined;
        else {
            let item = this.items[this.head];
            delete this.items[this.head];
            this.head += 1;
            return item;
        }
    }
    peek(){
        if(this.isEmpty()) return undefined;
        else return this.items[this.head]; 
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return this.tail - this.head;
    }
    clear(){
        this.tail = 0;
        this.head = 0;
        this.items = {};        
    }
    toString(){
        if(this.isEmpty()) return "";
        else {
            let str = "";
            str += this.items[this.head];
            for(let i = this.head + 1; i < this.tail; i++){
                str += `, ${this.items[i]}`;
            }
            return str;
        }
    }
}

export default Queue;

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");
console.log(queue.toString());

queue.enqueue("Camila");

console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());