import { Component } from '@angular/core';
import { TodosListComponent } from "../../components/todos-list/todos-list.component";

@Component({
  selector: 'app-page-main',
  standalone: true,
  imports: [TodosListComponent],
  templateUrl: './page-main.component.html',
  styleUrl: './page-main.component.scss'
})
export class PageMainComponent {

}
