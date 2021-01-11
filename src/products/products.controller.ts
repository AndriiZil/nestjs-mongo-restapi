import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  Redirect,
  HttpCode,
  HttpStatus,
  Header,
  Req,
  Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product-dto';
import { ProductsService } from './products.service';
// import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // @Get()
  // @Redirect('https://google.com', 301)
  // getAll(@Req() req, @Res() res) {
  //   return this.productService.getAll();
  // }
  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() сreateProductDto: CreateProductDto) {
    return this.productService.create(сreateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remove ${id}`;
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return `Update ${id}`;
  }
}
