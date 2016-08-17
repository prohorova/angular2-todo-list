import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

import { Todo } from './../shared/todo.model';
import { TodoService } from './../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html'
})
export class TodoItemComponent implements OnInit, OnDestroy {
    todos: Todo[];
    todoItem:Todo;
    saveAllowed: boolean = false;
    sub: Subscription;

    constructor(private route:ActivatedRoute,
                private router: Router,
                private todoService: TodoService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.todos = this.todoService.get();
            this.todoItem = this.todos.find(todo => todo.id === id);
        });
    }

    checkSaveAllowed(newContent: string): void {
        this.saveAllowed = newContent && this.todoItem.content !== newContent;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save(newContent: string): void {
        this.todoItem.content = newContent;
        this.todoService.put(this.todos);
        this.router.navigate(['/todo']);
    }

}