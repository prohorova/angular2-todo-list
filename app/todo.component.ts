import { Component } from '@angular/core';

import { TodoService } from './shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-app',
    templateUrl: 'todo.component.html'
})

export class TodoComponent {
    title = 'Angular 2do';
}