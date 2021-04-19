class Dequeue {
    constructor(){
        this.head = 0;
        this.tail = 0;
        this.items = {};
    }
    addFront(element){
        if(this.isEmpty()){
            this.addBack();
        }
        else if(this.head > 0){
            this.head -= 1;
            this.items[this.head] = element;
        }
        else {
            for(let i = this.tail; i > 0; i--){
                this.items[i] = this.items[i - 1];
            }
            this.items[0] = element;
            this.head = 0;
            this.tail += 1;
        }
    }
    addBack(element){
        this.items[this.tail] = element;
        this.tail += 1;
    }
    removeFront(){
        if(this.isEmpty()) return undefined;
        else {
            let item = this.items[this.head];
            delete this.items[this.head];
            this.head += 1;
            return item;
        }
    }
    removeBack(){
        if(this.isEmpty()) return undefined;
        else {
            this.tail -= 1;
            let item = this.items[this.tail];
            delete this.items[this.tail];
            return item;
        }
    }
    peekFront(){
        return this.items[this.head];
    }
    peekBack(){
        return this.items[this.tail - 1];
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

export default Dequeue;

const dequeue = new Dequeue();
console.log(dequeue.isEmpty());
dequeue.addBack("John");
dequeue.addBack("Jack");
console.log(dequeue.toString());
dequeue.addBack("Camila");
console.log(dequeue.toString());
console.log(dequeue.size());
console.log(dequeue.isEmpty());
dequeue.removeFront();
console.log(dequeue.toString());
dequeue.removeBack();
console.log(dequeue.toString());
dequeue.addFront("John");
console.log(dequeue.toString());

