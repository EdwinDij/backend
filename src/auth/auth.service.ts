import { CustomerService } from "./../customer/customer.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private customerService: CustomerService
  ) {}

  async login(
    email: string,
    password: string
  ): Promise<{ result: any; accessToken: string }> {
    const user = await this.userService.findOne(email);
    const customer = await this.customerService.findOneByEmail(email);
    console.log(user, customer);
    if (!user) {
      const isMatch = await compare(password, customer[0].password);
      if (isMatch) {
        const { password: _, ...result } = customer[0];
        const accessToken = sign(result, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
        return { result, accessToken };
      }
    } else if (!customer) {
      const isMatch = await compare(password, user[0].password);
      if (isMatch) {
        const { password: _, ...result } = user || customer[0];
        const accessToken = sign(result, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
        return { result, accessToken };
      }
    } else {
      throw new UnauthorizedException("Invalid credentials");
    }
  }
}
