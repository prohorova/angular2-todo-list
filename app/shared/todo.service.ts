import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    private key = 'todos';
    get(): Todo[] {
        return JSON.parse(localStorage.getItem(this.key));
    }
    put(todos: Todo[]): void {
        localStorage.setItem(this.key, JSON.stringify(todos));
    }
}