import { Component, OnInit } from '@angular/core';

import { Todo } from './../shared/todo.model';
import { TodoService } from "./../shared/todo.service";
import { TodoSortPipe } from './../shared/todo.pipe';

@Component({
    moduleId: module.id,
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit{

    title: string;
    todos: Todo[];

    constructor(private todoService: TodoService) {};

    ngOnInit() {
        this.todos = this.todoService.get() || [];
    }

    addTodo(todoContent: string): void {
        this.todos.push(new Todo(todoContent));
        this.todoService.put(this.todos);
    }

    delete(index): void {
        this.todos.splice(index, 1);
        this.todoService.put(this.todos);
    }

    toggle(todo): void {
        todo.done = !todo.done;
        this.todoService.put(this.todos);
    }

}