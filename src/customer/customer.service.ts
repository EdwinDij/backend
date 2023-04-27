import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Customer } from "../schema/userSchema/customer.schema";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { genSalt, hash } from "bcrypt";

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>
  ) {}

  async create(CreateCustomerDto: CreateCustomerDto): Promise<Customer> {
    const salt = await genSalt();
    CreateCustomerDto.password = await hash(CreateCustomerDto.password, salt);
    const createdCustomer = new this.customerModel(CreateCustomerDto);
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOne(id: number): Promise<Customer[]> {
    return this.customerModel.find({ id }).exec();
  }
  async findOneByEmail(email: string): Promise<Customer[]> {
    return this.customerModel.find({ email }).exec();
  }
}
