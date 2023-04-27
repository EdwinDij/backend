import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import {
  Product,
  ProductDocument,
} from "../schema/productSchema/product.schema";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().populate("user").exec();
  }

  async findOne(id: number): Promise<Product[]> {
    if (this.productModel.find({ id }).populate("user").exec() == null) {
      return JSON.parse(`{"message": "Product with id ${id} not found"}`);
    } else {
      return this.productModel.find({ id }).populate("user").exec();
    }
  }

  async findByName(name: string): Promise<Product[]> {
    if (this.productModel.find({ name }).populate("user").exec() == null) {
      return JSON.parse(`{"message": "Product with name ${name} not found"}`);
    } else {
      return this.productModel.find({ name }).populate("user").exec();
    }
  }

  async delete(id: number): Promise<Product[]> {
    if (this.productModel.find({ id }).populate("user").exec() == null) {
      return JSON.parse(`{"message": "Product with id ${id} not found"}`);
    } else {
      return this.productModel.find({ id }).populate("user").exec();
    }
  }

  async update(id: number): Promise<Product[]> {
    if (this.productModel.find({ id }).populate("user").exec() == null) {
      return JSON.parse(`{"message": "Product with id ${id} not found"}`);
    } else {
      return this.productModel.find({ id }).populate("user").exec();
    }
  }
}
