import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
//
import { apiEnv } from 'src/common/api-options/api.env.option';
import { GoogleUser } from 'src/types/user.types';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: apiEnv.env.GOOGLE_CLIENT_ID,
      clientSecret: apiEnv.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/api/v1/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: GoogleUser,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, displayName, emails } = profile;

    const user = {
      googleId: id,
      email: emails[0].value,
      name: displayName,
    };

    done(null, user);
  }
}
