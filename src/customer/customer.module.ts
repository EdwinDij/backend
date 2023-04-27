import { AuthModule } from "./../auth/auth.module";
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
    AuthModule,
  ],
  providers: [CustomerService],
  controllers: [CustomerController],
  exports: [CustomerService, MongooseModule],
})
export class CustomerModule {}
