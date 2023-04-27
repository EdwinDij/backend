import { Controller, Body, Post, Get } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { Customer } from "src/schema/userSchema/customer.schema";

@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() customer: Customer): Promise<Customer> {
    return this.customerService.create(customer);
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get("id")
  async findOne(id: number): Promise<Customer[]> {
    return this.customerService.findOne(id);
  }
}
