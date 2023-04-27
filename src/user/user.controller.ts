import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "../schema/userSchema/user.schema";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }
}
