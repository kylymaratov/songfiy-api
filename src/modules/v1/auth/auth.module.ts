import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './strategies/googe.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
//
import { apiEnv } from 'src/common/api-options/api.env.option';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: apiEnv.env.JWT_SECRET,
      signOptions: { expiresIn: '10d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, JwtStrategy],
})
export class AuthModule {}
