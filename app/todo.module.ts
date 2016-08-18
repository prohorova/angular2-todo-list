import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './todo.routing';
import { TodoComponent }  from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './shared/todo.service';
import { TodoSortPipe } from './shared/todo.pipe';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [
        TodoComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoSortPipe],
    providers: [
        appRoutingProviders,
        TodoService
    ],
    bootstrap: [TodoComponent]
})
export class TodoModule {
}
