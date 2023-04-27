import { Product } from "src/schema/productSchema/product.schema";
import { ProductService } from "./product.service";
import { Controller, Get, Delete, Put, Post, Body, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get("id")
  async findOne(id: number): Promise<Product[]> {
    return this.productService.findOne(id);
  }

  @Get("name")
  async findByName(name: string): Promise<Product[]> {
    return this.productService.findByName(name);
  }

  @Delete("id")
  async delete(id: number): Promise<Product[]> {
    return this.productService.delete(id);
  }

  @Put("id")
  async update(id: number): Promise<Product[]> {
    return this.productService.update(id);
  }

  @Post()
  async create(
    @Body() product: Product,
    @Req() req: Request & { user: any }
  ): Promise<Product> {
    const user = req.user;
    product.user = user.id;
    return await this.productService.create(product);
  }
}
