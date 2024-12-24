import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('signup')
  createUser() {
    return 'Success';
  }
}
