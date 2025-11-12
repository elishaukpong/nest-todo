import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {
    //
  }

  @Get()
  index(): any[] {
    return this.todoService.getAll();
  }

  @Post()
  store(@Body() body: any): any[] {
    return this.todoService.create(body);
  }

  @Get(':id')
  show(@Param('id') title: string): any {
    return this.todoService.getOne(title);
  }

  @Patch(':id')
  update(@Param('id') title: string, @Body() body: any) {
    return this.todoService.update(title, body);
  }

  @Delete(':id')
  destroy(@Param('id') title: string) {
    this.todoService.delete(title);
  }
}
