import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../lib/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDeleteEmitter: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggleEmitter: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {

  }

  deleteTodo(todo: Todo) {
    this.todoDeleteEmitter.emit(todo);
  }

  toggleTodo(todo: Todo) {
    this.todoToggleEmitter.emit(todo);
  }
}
