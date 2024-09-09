import { Component, OnInit } from '@angular/core';
import { Todo } from '../../lib/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  localItem: string | null;
  constructor() {
    this.todos = [];
    this.localItem = localStorage.getItem("todos");
    if(this.localItem) {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {

  }

  addTodo(currTodo: Todo) {
    this.todos.push({...currTodo});
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  deleteTodo(currTodo: Todo) {
    this.todos = this.todos.filter(todoItem => todoItem.id !== currTodo.id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  toggleTodo(currTodo: Todo) {
    const idx = this.todos.findIndex(todo => todo.id === currTodo.id);
    this.todos[idx].isActive = !this.todos[idx].isActive;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
