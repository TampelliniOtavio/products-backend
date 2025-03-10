import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DatabaseService) {}

  create(data: CreateProductDto) {
    return this.db.products.create({ data });
  }

  findAll() {
    return this.db.products.findMany();
  }

  async findOne(id: number) {
    const product = await this.db.products.findUnique({ where: { id } });

    if (product === null) {
      throw new NotFoundException('Produto não econtrado');
    }

    return product;
  }

  async update(id: number, data: UpdateProductDto) {
    await this.findOne(id);

    return await this.db.products.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.db.products.delete({ where: { id } });
  }
}
