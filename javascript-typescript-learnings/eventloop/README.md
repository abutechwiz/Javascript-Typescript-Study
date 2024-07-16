## Event loop implementation in TS 
[16-07-2024]


- Learning typescript by simulating existing concepts in JavaScript like the event loop, concurrency model in JS(promises)
- This [visualizer](https://www.jsv9000.app/) helps a lot in visualizing the event loop and understand it well

	- Implemented this using classes in typescript to brush up on using classes, tsconfig and transpiling
	- Will use more types, interfaces as much as possible

- Created two data structures, stack(For simulating javascript Call Stack) and the queue(For callback queue)	
- Next step is to implement the microtask queue for promises and have a priority based event loop operations