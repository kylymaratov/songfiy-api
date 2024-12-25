import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './strategies/googe.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
//
import { apiEnv } from 'src/common/api-options/api.env.option';
import { UserService } from '../user/user.service';
import { PrismaService } from 'src/database/database.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: apiEnv.env.JWT_SECRET,
      signOptions: { expiresIn: parseInt(apiEnv.env.JWT_EXPIRE_MS) },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    JwtStrategy,
    UserService,
    PrismaService,
  ],
})
export class AuthModule {}
