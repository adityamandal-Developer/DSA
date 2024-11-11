class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop();
        } else {
            throw "stack underflow";
        }
    }

    peek() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        } else {
            throw "stack overflow";
        }
    }

    size() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}
