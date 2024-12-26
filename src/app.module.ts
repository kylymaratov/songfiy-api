import { Module } from '@nestjs/common';
import { AuthModule } from './modules/v1/auth/auth.module';
import { UserModule } from './modules/v1/user/user.module';

@Module({
  imports: [AuthModule, UserModule],
})
export class AppModule {}
