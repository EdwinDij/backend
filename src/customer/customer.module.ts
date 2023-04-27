import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Customer, CustomerSchema } from "../schema/userSchema/customer.schema";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  providers: [CustomerService],
  exports: [CustomerService, MongooseModule],
  controllers: [CustomerController],
})
export class CustomerModule {}
