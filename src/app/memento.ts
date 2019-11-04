export class Memento {
    private name: string;

    constructor(private state) {
        this.name = (new Date).toDateString();
    }

    public getState(): number {
        return this.state;
    }
}
