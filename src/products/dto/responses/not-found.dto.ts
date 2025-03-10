import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ProductNotFound {
  @ApiProperty({ default: 'Produto Não Encontrado' })
  message: 'Produto Não Encontrado';

  @ApiProperty({ default: 'Not Found' })
  error: 'Not Found';

  @ApiProperty({ default: HttpStatus.NOT_FOUND })
  statusCode: HttpStatus.NOT_FOUND;
}
