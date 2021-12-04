import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { GooglePayload } from './google-profile-payload.type';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  // For more details see:  https://developers.google.com/identity/protocols/oauth2/web-server#httprest_1
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env['AUTH_GOOGLE_KEY'],
      clientSecret: process.env['AUTH_GOOGLE_SECRET'],
      callbackURL: process.env['GOOGLE_CALLBACK_URL'],
      passReqToCallback: true,
      scope: ['profile', 'email'],
      accessType: 'offline',
      prompt: 'consent',
    });
  }

  async validate(
    req: any,
    accessToken: string,
    refreshToken: string,
    profile: GooglePayload,
  ): Promise<any> {
    return this.authService.manageGoogleUser(profile);
  }
}
