import {
  ConsoleLogger,
  Controller,
  Get,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { GoogleOAuth2Guard } from './google/google-oauth.guard';

@Controller('oauth2')
export class AuthController {
  private readonly logger = new ConsoleLogger(AuthController.name);

  @UseGuards(GoogleOAuth2Guard)
  @Get('login/google')
  async login(@Request() _req) {
    this.logger.log('login with google');
  }

  /**
   * Methode appeler par google apres l'authetification.
   * Vous pouver l'utiliser pour faire la redirection vers votre site
   */
  @UseGuards(GoogleOAuth2Guard)
  @Get('callback')
  async callbackGoogle(@Req() req, @Res() res: Response) {
    res.redirect(`${process.env['FRONTEND_URL']}`);
  }
}
