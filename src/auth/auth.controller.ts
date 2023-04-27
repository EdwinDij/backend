import { User } from "../schema/userSchema/user.schema";
import { AuthService } from "./auth.service";
import { Controller, HttpCode, Post, Body, HttpStatus } from "@nestjs/common";

@Controller("user")
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  login(@Body() user: User): Promise<any> {
    return this.AuthService.login(user.email, user.password);
  }
}
