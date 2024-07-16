"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const callStack_1 = require("./callStack");
const eventLoop_1 = require("./eventLoop");
const queue_1 = require("./queue");
const input = [
    { task: "loga", type: "sync" },
    { task: "logb", type: "async" },
    { task: "logc", type: "async" },
    { task: "logd", type: "sync" },
];
function main() {
    console.log("LLLLOOP");
    const stack = new callStack_1.CallStack();
    const queue = new queue_1.Queue();
    (0, eventLoop_1.eventLoop)(input, stack, queue);
}
main();
