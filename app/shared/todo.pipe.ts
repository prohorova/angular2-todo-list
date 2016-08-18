import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.model';

@Pipe({
    name: 'sort',
    pure: false
})
export class TodoSortPipe implements PipeTransform {
    transform(todos: Todo[]) {
        return todos.sort((a, b) => {
            if (a.content > b.content) return 1;
            else if (a.content < b.content) return -1;
            else return 0;
        }).sort((a, b) => {
            if (a.done > b.done) return 1;
            else if (a.done < b.done) return -1;
            else return 0;
        })
    }
}