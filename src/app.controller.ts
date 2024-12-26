import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get('/')
  getHome() {
    return "<h2 style='text-align:center'>Free Youtube Music API</h2>";
  }
}
