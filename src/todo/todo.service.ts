import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  todos: any[] = [];

  getAll(): any[] {
    return this.todos;
  }

  create(data): any[] {
    this.todos.push(data);

    return this.todos;
  }

  getOne(title: string): any {
    return this.todos.find((todo) => todo.name === title);
  }

  update() {

  }

  delete(){

  }
}
