import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class Product {
  @IsInt({ message: '$property deve ser inteiro' })
  @IsPositive({ message: '$property deve ser positivo' })
  @ApiProperty()
  id: number;

  @IsString({ message: 'Nome deve ser texto' })
  @Length(1, 191, {
    message: 'Nome deve ter no mínimo 1 e no máximo 191 caracteres',
  })
  @ApiProperty()
  name: string;

  @IsNumber(
    { maxDecimalPlaces: 2, allowInfinity: false, allowNaN: false },
    { message: 'Preço deve ser numeral com até 2 casas decimais' },
  )
  @IsPositive({ message: 'Preço deve ser positivo' })
  @Min(1)
  @ApiProperty({ minimum: 1 })
  price: number;

  @IsString({ message: 'Descrição deve ser texto' })
  @IsOptional()
  @Length(0, 191, {
    message: 'Descrição deve ter no máximo 191 caracteres',
  })
  @ApiPropertyOptional()
  description?: string;
}
