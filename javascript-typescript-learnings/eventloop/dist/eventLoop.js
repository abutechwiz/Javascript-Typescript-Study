"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventLoop = eventLoop;
function eventLoop(input, stack, queue) {
    if (input) {
        syncOperation(input, stack, queue);
        asyncQueueOperation(queue);
    }
}
function syncOperation(input, stack, queue) {
    input.forEach(function (inp) {
        switch (inp.type) {
            case "sync":
                stack.push(inp.task);
                if (stack.size() === 1) {
                    stack.print();
                    stack.clear();
                    break;
                }
                stack.print();
                stack.pop();
                break;
            case "async":
                queue.enqueue(inp.task);
                break;
        }
    });
}
function asyncQueueOperation(queue) {
    const queueCpy = [...queue.items];
    if (queue.items) {
        console.log("queue size ", queue.items.length);
        queueCpy.forEach(function (queueItem) {
            if (queue.size() === 1) {
                console.log("Printing from QUEUE ", queueItem);
                ``;
                queue.clear();
                return;
            }
            console.log("Printing from QUEUE ", queueItem);
            ``;
            queue.dequeue();
        });
    }
}
