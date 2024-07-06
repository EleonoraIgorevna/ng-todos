import { Injectable } from '@angular/core';
import { TodosApiService } from "./todos-api.service";
import { BehaviorSubject, Observable, map, switchMap, take, tap } from "rxjs";
import { Todo, TodoCreate } from "../models/todos.models";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  /** Асинхронное хранилище Todos */
  private readonly _stateTodos = new BehaviorSubject<Todo[]>([]);

  /** Преобразованный BehaviorSubject в Observable, чтобы слушать данные из вне */
  public readonly todos$ = this._stateTodos.asObservable();

  constructor(
    private readonly todosApiService: TodosApiService
  ) {
    this._init();
  }

  public getAll(): Observable<Todo[]> {
    return this.todosApiService.getAll().pipe(
      tap(todos => {
        this._stateTodos.next(todos);
      })
    );
  }

  public getById(id: string): Observable<Todo> {
    return this.todosApiService.getById(id).pipe(
      switchMap(todo =>
        this.getAll().pipe(
          map(() => todo)
        )
      )
    );
  }

  public create(todoCreate: TodoCreate): Observable<Todo> {
    return this.todosApiService.create(todoCreate).pipe(
      switchMap(todo =>
        this.getAll().pipe(
          map(() => todo)
        )
      )
    );
  }

  public deleteById(id: string): Observable<{}> {
    return this.todosApiService.deleteById(id).pipe(
      switchMap(emptyObject =>
        this.getAll().pipe(
          map(() => emptyObject)
        )
      )
    );
  }

  private _init(): void {
    // Получаем первые данные с потока и сразу отписываемся
    this.getAll().pipe(take(1)).subscribe();
  }









}
