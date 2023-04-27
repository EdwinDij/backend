import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CustomerService } from './customer/customer.service';
import { ProductService } from './product/product.service';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URL), UserModule],
  controllers: [AppController],
  providers: [AppService, CustomerService, ProductService],
})
export class AppModule {}
