import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
//
import { apiEnv } from 'src/common/api-options/api.env.option';
import { JwtPayload } from 'src/types/jwt.types';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: apiEnv.env.JWT_SECRET,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    try {
      const accessToken = ExtractJwt.fromAuthHeaderAsBearerToken()(req);

      const { email } = payload;

      const user = await this.userService.findUserByEmail(email);

      const session = await this.userService.getUserSessionByToken(
        user.id,
        accessToken,
      );

      if (!session) throw new Error();

      delete user.password;

      return user;
    } catch {
      throw new UnauthorizedException('Invalid token or expired');
    }
  }
}
