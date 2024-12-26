import { Module } from '@nestjs/common';
import { AuthModule } from './modules/v1/auth/auth.module';
import { UserModule } from './modules/v1/user/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
