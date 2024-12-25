import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/common/guards/jwt.auth.guard';

import { CurrentUser } from 'src/common/decorators/user.decorator';
import { User } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUser(@CurrentUser() user: User) {
    return user;
  }

  @Get('sessions')
  getUserSessions(@CurrentUser() user: User) {
    return this.userService.getUserSessions(user);
  }
}
