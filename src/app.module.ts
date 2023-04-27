import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { UserController } from "./user/user.controller";
import { CustomerController } from "./customer/customer.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { CustomerService } from "./customer/customer.service";
import { ProductService } from "./product/product.service";
import { ProductModule } from "./product/product.module";
import { CustomerModule } from "./customer/customer.module";
import * as dotenv from "dotenv";
import { AuthService } from "./auth/auth.service";
import { UserService } from "./user/user.service";
import { AuthModule } from "./auth/auth.module";
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UserModule,
    ProductModule,
    CustomerModule,
    AuthModule,
  ],
  controllers: [UserController, CustomerController],
  providers: [
    AppService,
    CustomerService,
    ProductService,
    AuthService,
    UserService,
  ],
})
export class AppModule {}
