import { CallStack } from "./callStack";
import { eventLoop } from "./eventLoop";
import { Queue } from "./queue";

const input = [
    { task: "TASK A", type: "sync" },
    { task: "TASK B", type: "async" },
    { task: "TASK C", type: "async" },
    { task: "TASK D", type: "sync" },
];

function main(){
    const stack = new CallStack<any>();
    const queue = new Queue<any>();
    eventLoop(input, stack, queue);
}

main();



