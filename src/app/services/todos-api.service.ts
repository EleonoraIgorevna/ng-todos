import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Todo, TodoCreate } from "../models/todos.models";

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {

  private readonly _baseUrl = 'http://localhost:3000/todos';

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._baseUrl);
  }

  public getById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this._baseUrl}/${id}`);
  }

  public create(todoCreate: TodoCreate): Observable<Todo> {
    return this.http.post<Todo>(this._baseUrl, todoCreate);
  }

  public deleteById(id: string): Observable<{}> {
    return this.http.delete<{}>(`${this._baseUrl}/${id}`);
  }









}
