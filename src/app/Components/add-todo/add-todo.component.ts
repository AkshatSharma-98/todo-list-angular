import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../lib/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})

export class AddTodoComponent {

  @Output() todoAddEmitter: EventEmitter<Todo> = new EventEmitter();

  title: string;
  description: string;

  constructor() {}

  handleSubmit() {
    if(!this.title || !this.description) {
      return;
    }
    const currTodo: Todo = {
      id: Math.random(),
      title: this.title,
      description: this.description,
      isActive: true
    }
    this.todoAddEmitter.emit(currTodo);
    this.title = '', this.description = '';
  }
}
