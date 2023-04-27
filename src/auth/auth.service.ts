import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

@Injectable()
export class AuthService {
  constructor(private UserService: UserService) {}

  async login(email: string, password: string): Promise<any> {
    const users = await this.UserService.findOne(email);
    const user = users[0];
    if (user) {
      const isMatch = await compare(password, user.password);
      if (isMatch) {
        const { password, ...result } = user;
        const accessToken = sign(result, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
        return { result, accessToken };
      }
    }
    throw new UnauthorizedException("Invalid credentials");
  }
}
