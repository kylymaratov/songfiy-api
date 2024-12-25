import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserSession } from '@prisma/client';
//
import { JwtPayload } from 'src/types/jwt.types';
import { UserService } from '../user/user.service';
import { Request } from 'express';
import { LoginResponse } from 'src/types/response.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(req: Request, user: User): Promise<LoginResponse> {
    const userAgent = req.headers['user-agent'];

    const payload: JwtPayload = {
      email: user?.email,
      userAgent,
    };

    const accessToken = this.jwtService.sign(payload);

    const createdSession = await this.userService.createSession(
      user,
      accessToken,
      userAgent,
    );

    return {
      session: createdSession,
    };
  }
}
