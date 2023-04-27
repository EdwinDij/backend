export class CreateProductDto {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  countInStock: number;
  availableSizes: string[];
  available: boolean;
}
