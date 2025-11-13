import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './DTOs/create-todo.dto';
import { UpdateTodoDto } from './DTOs/update-todo.dto';

@Injectable()
export class TodoService {
  todos: any[] = [];

  getAll(): any[] {
    return this.todos;
  }

  create(data: CreateTodoDto): any[] {
    this.todos.push(data);

    return this.todos;
  }

  getOne(title: string): any {
    const index = this.todos.findIndex((todo) => todo.title === title);

    if (index < 0) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return this.todos[index];
  }

  update(title: string, body: UpdateTodoDto): CreateTodoDto {
    const index = this.todos.findIndex((todo) => todo.title === title);

    if (index < 0) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    const todoToBeUpdated = this.todos[index];

    this.todos[index] = {...todoToBeUpdated, ...body};

    return this.todos[index];
  }

  delete(title: string) {
    const index = this.todos.findIndex((todo) => todo.title === title);

    if (index < 0) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    this.todos.splice(index,1);

    return this.todos;
  }
}
