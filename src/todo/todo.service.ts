import { HttpException, Injectable } from '@nestjs/common';

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

  update(title: string, body: any) {
    const index = this.todos.findIndex((todo) => todo.name === title);

    if (index < 0) {
      throw new HttpException('Not found', 404);
    }

    this.todos[index] = body;

    return this.todos[index];
  }

  delete(title: string) {
    const index = this.todos.findIndex((todo) => todo.name === title);

    if (index < 0) {
      throw new HttpException('Not found', 404);
    }

    this.todos.splice(index,1);


    return this.todos;
  }
}
