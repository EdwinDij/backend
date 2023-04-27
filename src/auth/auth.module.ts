import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { User, UserSchema } from "../schema/userSchema/user.schema";
import { CustomerService } from "../customer/customer.service";
import { Customer, CustomerSchema } from "../schema/userSchema/customer.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, CustomerService],
  exports: [AuthService],
})
export class AuthModule {}
