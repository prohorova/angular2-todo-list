import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

const appRoutes: Routes = [
    { path: 'todo', component: TodoListComponent },
    { path: 'todo/:id', component: TodoItemComponent },
    { path: '', redirectTo: '/todo', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);