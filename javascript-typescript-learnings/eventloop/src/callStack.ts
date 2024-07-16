export class CallStack<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
    size(): number {
        return this.items.length
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    clear(): void {
        this.items = [];
    }

    print(): void {
        console.log("PRINTING FROM STACK ", this.items.toString());
    }
}