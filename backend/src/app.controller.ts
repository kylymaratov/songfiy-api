import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { IpGuard } from './guards/ip.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('backupinfo')
  @UseGuards(IpGuard)
  getBackUpInfo() {
    return this.appService.getBackUpInfo();
  }
}
