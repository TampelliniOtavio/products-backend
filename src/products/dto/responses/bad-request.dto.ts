import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ProductBadRequest {
  @ApiProperty()
  message: string[];

  @ApiProperty({ default: 'Bad Request' })
  error: 'Bad Request';

  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  statusCode: HttpStatus.BAD_REQUEST;
}
