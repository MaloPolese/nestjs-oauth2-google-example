import { Injectable } from '@nestjs/common';
import { GooglePayload } from './google/google-profile-payload.type';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async manageGoogleUser(profile: GooglePayload): Promise<User> {
    return this.userService.createOrUpdateUser({
      displayName: profile.displayName,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value,
    });
  }
}
