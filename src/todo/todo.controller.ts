import {
  Body,
  Controller,
  Delete,
  Get, HttpCode, HttpStatus,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './DTOs/create-todo.dto';
import { UpdateTodoDto } from './DTOs/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {
    //
  }

  @Get()
  index(): any[] {
    return this.todoService.getAll();
  }

  @Post()
  store(
    @Body(new ValidationPipe()) createTodoDto: CreateTodoDto,
  ): CreateTodoDto[] {
    return this.todoService.create(createTodoDto);
  }

  @Get(':title')
  show(@Param('title') title: string): CreateTodoDto {
    return this.todoService.getOne(title);
  }

  @Patch(':title')
  update(
    @Param('title') title: string,
    @Body(new ValidationPipe()) updateTodoDto: UpdateTodoDto,
  ): CreateTodoDto {
    return this.todoService.update(title, updateTodoDto.filterUndefined());
  }

  @Delete(':title')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('title') title: string): void {
    this.todoService.delete(title);
  }
}
