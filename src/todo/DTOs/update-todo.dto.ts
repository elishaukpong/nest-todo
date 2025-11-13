import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { filterUndefinedProperties } from '../../utils/object.utils';

export class UpdateTodoDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @Transform(({ value }) => value === 'true' || value === '1' || value === true)
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  /**
   * Returns a new DTO object with undefined properties filtered out
   * @returns A new DTO with only defined properties
   */
  filterUndefined(): UpdateTodoDto {
    return filterUndefinedProperties(this);
  }
}
