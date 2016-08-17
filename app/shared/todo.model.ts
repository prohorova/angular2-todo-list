export class Todo {
    id: number;
    content: string;
    done: boolean;

    constructor(content: string) {
        this.id = new Date().getTime();
        this.content = content;
        this.done = false;
    }
}