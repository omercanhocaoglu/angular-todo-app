import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos : Todo[] = [];
  newTodo: string;

  saveTodo () {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = "";
    } else {
      alert("You can't add empty ToDo!")
    }
  };

  done ( id:number ) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  };

  remove ( id:number ) {
    this.todos = this.todos.filter( ( v, i ) => i != id );
  };

  hiddenMessage = false;

  toggleInfo () {
    this.hiddenMessage = !this.hiddenMessage
  };

  siteTheme = true;

  changeTheme () {
    this.siteTheme = !this.siteTheme
  }
}
