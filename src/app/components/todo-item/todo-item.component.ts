import { Component, Input } from '@angular/core';
import { TodosService } from "../../services/todos.service";
import { Todo } from "../../models/todos.models";

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {

  @Input({ required: true }) todo!: Todo;

  constructor(
    private readonly todosService: TodosService
  ) { }

}
