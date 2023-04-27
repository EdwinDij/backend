import { AuthService } from "./auth.service";
import { Controller, HttpCode, Post, Body, HttpStatus } from "@nestjs/common";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    return this.authService.login(loginUserDto.email, loginUserDto.password);
  }
}
