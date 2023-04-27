import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { User } from "../userSchema/user.schema";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ autoIcrement: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  countInStock: number;

  @Prop()
  availableSizes: string[];

  @Prop()
  available: boolean;

  @Prop({ type: User })
  user: User;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
