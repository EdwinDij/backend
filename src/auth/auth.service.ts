import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(
    email: string,
    password: string
  ): Promise<{ result: any; accessToken: string }> {
    const user = await this.userService.findOne(email);
    if (user) {
      const isMatch = await compare(password, user.password);
      if (isMatch) {
        const { password: _, ...result } = user; // Ignore password field in result
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
