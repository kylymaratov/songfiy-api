import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
//
import { apiEnv } from 'src/common/api-options/api.env.option';
import { CreateUser, GoogleUser } from 'src/types/user.types';
import { UserService } from '../../user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly userService: UserService) {
    super({
      clientID: apiEnv.env.GOOGLE_CLIENT_ID,
      clientSecret: apiEnv.env.GOOGLE_CLIENT_SECRET,
      callbackURL: apiEnv.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: GoogleUser,
    done: VerifyCallback,
  ): Promise<void> {
    try {
      const createUser: CreateUser = {
        email: profile.emails[0].value,
        verified: profile.emails[0].verified,
        password: '',
        provider: profile.provider,
        avatar: profile.photos[0].value,
      };

      const user = await this.userService.createUser(createUser);

      await done(null, user);
    } catch {
      throw new BadRequestException('Error while login with Google');
    }
  }
}
