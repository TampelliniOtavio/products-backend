import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { ProductNotFound } from './dto/responses/not-found.dto';
import { ProductBadRequest } from './dto/responses/bad-request.dto';

@Controller('products')
@ApiTags('Produtos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ type: Product, status: HttpStatus.CREATED })
  @ApiResponse({ type: ProductBadRequest, status: HttpStatus.BAD_REQUEST })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiResponse({ type: [Product], status: HttpStatus.OK })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: Product, status: HttpStatus.OK })
  @ApiResponse({ type: ProductNotFound, status: HttpStatus.NOT_FOUND })
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ type: Product, status: HttpStatus.OK })
  @ApiResponse({ type: ProductNotFound, status: HttpStatus.NOT_FOUND })
  @ApiResponse({ type: ProductBadRequest, status: HttpStatus.BAD_REQUEST })
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiResponse({ type: Product, status: HttpStatus.OK })
  @ApiResponse({ type: ProductNotFound, status: HttpStatus.NOT_FOUND })
  remove(@Param('id') id: number) {
    return this.productsService.remove(id);
  }
}
