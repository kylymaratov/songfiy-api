import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
//
import { apiEnv } from 'src/common/api-options/api.env.option';
import { JwtPayload } from 'src/types/jwt.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: apiEnv.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    return payload.email;
  }
}
