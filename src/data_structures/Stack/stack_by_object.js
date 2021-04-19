// 通过 Object 实现
class Stack {
    constructor(){
        this.items = {};
        this.size = 0;
    }
    push(element){
        this.items[this.size] = element;
        this.size += 1;
    }
    pop(){
        if(this.isEmpty()) return undefined;
        else {
            this.size -= 1;
            let item = this.items[this.size];
            delete this.items[this.size];
            return item;
        }
    }
    peek(){
        if(this.isEmpty()) return undefined;
        else return this.items[this.size - 1];
    }
    isEmpty(){
        return this.size === 0;
    }
    clear(){
        this.items = {};
        this.size = 0;
    }
    toString(){
        if(this.isEmpty()) return "";
        else {
            let str = "";
            str += this.items[0];
            for(let i = 1; i < this.size; i++){
                str += `, ${this.items[i]}`;
            }
            return str;
        }
    }
}

export default Stack;

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);
console.log(stack.isEmpty());

stack.push(15);

stack.pop();
stack.pop();

console.log(stack.toString());