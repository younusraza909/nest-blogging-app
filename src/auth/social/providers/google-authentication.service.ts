import {
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OAuth2Client, TokenPayload } from 'google-auth-library';
import jwtConfig from 'src/auth/config/jwt.config';
import { GoogleTokenDto } from '../dtos/google-token.dto';
import { UsersService } from 'src/users/providers/users.service';
import { GenerateTokensProvider } from 'src/auth/providers/generate-tokens.provider';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oauthClient: OAuth2Client;
  constructor(
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguarion: ConfigType<typeof jwtConfig>,

    private readonly userService: UsersService,

    private readonly generateTokenProvider: GenerateTokensProvider,
  ) {}

  onModuleInit() {
    this.oauthClient = new OAuth2Client(
      this.jwtConfiguarion.googleClientId,
      this.jwtConfiguarion.googleClientSecret,
    );
  }

  public async authenticate(googleTokenDto: GoogleTokenDto) {
    try {
      const loginTicket = await this.oauthClient.verifyIdToken({
        idToken: googleTokenDto.token,
      });

      const {
        email,
        sub: googleId,
        given_name: firstName,
        family_name: lastName,
      } = loginTicket.getPayload() as TokenPayload;

      const user = await this.userService.findOneByGoogleId(googleId);

      if (user) {
        return this.generateTokenProvider.generateTokens(user);
      }

      const newUser = await this.userService.createGoogleUser({
        email: email ?? '',
        firstName: firstName ?? '',
        lastName: lastName ?? '',
        googleId,
      });

      return this.generateTokenProvider.generateTokens(newUser);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
