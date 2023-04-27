import { Controller, Body, Post, Get } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { Customer } from "src/schema/userSchema/customer.schema";
import { AuthService } from "../auth/auth.service";

@Controller("customer")
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private authService: AuthService
  ) {}

  @Post("register")
  async create(@Body() customer: Customer): Promise<Customer> {
    return this.customerService.create(customer);
  }

  @Post("login")
  async login(
    @Body("email") email: string,
    @Body("password") password: string
  ) {
    const result = await this.authService.login(email, password);
    return { message: "User authenticated!", ...result };
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
