import { IsBoolean, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @Transform(({ value }) => value === 'true' || value === '1' || value === true)
  @IsBoolean()
  completed: boolean;
}
