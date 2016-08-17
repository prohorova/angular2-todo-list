import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './todo.routing';
import { TodoComponent }  from './todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [TodoComponent, TodoListComponent, TodoItemComponent],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [TodoComponent]
})
export class TodoModule {
}
