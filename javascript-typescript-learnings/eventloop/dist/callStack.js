"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallStack = void 0;
class CallStack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log("PRINTING FROM STACK ", this.items.toString());
    }
}
exports.CallStack = CallStack;
