export function eventLoop(input: any, stack: any, queue: any): void{
    if(input){
        syncOperation(input, stack, queue);
        asyncQueueOperation(queue);
    }
}

function syncOperation(input: any, stack: any, queue: any){
    input.forEach(function(inp: any){
        switch(inp.type){
            case "sync":
                stack.push(inp.task);
                if(stack.size() === 1){
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
    })
}

function asyncQueueOperation(queue: any){
    const queueCpy = [...queue.items];
        if(queue.items){
            console.log("queue size ", queue.items.length);
            queueCpy.forEach(function(queueItem){
                if(queue.size() === 1){
                    console.log("Printing from QUEUE ", queueItem);``    
                    queue.clear();
                    return;
                }
                console.log("Printing from QUEUE ", queueItem);``
                queue.dequeue();
            })
        }
}