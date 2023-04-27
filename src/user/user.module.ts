import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schema/userSchema/user.schema';
import { Customer, CustomerSchema } from '../schema/userSchema/customer.schema';
//import { UserService } from './user.service';
//import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  providers: [UserService],
  //controllers: [UserController, CustomerController],
  // providers: [UserService, CustomerService],
})
export class UserModule {}
