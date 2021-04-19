// 通过 Array 实现
class Stack {
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()) return undefined;
        else return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.size() === 0;
    }
    clear(){
        this.items = [];
    }
    size(){
        return this.items.length;
    }
}

export default Stack;

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size());
