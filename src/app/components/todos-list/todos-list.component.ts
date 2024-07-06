import { Component } from '@angular/core';
import { TodosService } from "../../services/todos.service";
import { Observable } from "rxjs";
import { Todo } from "../../models/todos.models";
import { CommonModule } from "@angular/common";
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {

  public readonly todos$: Observable<Todo[]> = this.todosService.todos$;

  constructor(
    private readonly todosService: TodosService
  ) {
    // для теста
    (window as any).todosService = todosService;
  }

}
