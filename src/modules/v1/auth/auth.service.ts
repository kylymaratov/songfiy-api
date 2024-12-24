import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { JwtPayload } from 'src/types/jwt.types';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user?: User) {
    if (!user) throw new InternalServerErrorException();

    const payload: JwtPayload = { email: user?.email };

    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
