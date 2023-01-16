import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from '../../modules/users/users.module';
import { AuthenticationController } from './authentication.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { JwtRefreshTokenStrategy } from './jwt-refresh-token.strategy';
import { TwoFactorAuthenticationController } from './two-factor/two-factor-authentication.controller';
import { TwoFactorAuthenticationService } from './two-factor/two-factor-authentication.service';
import { JwtTwoFactorStrategy } from './jwt-two-factor.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    ConfigModule,
    JwtModule.register({})
  ],
  providers: [
    AuthenticationService,
    LocalStrategy,
    JwtStrategy,
    JwtRefreshTokenStrategy,
    TwoFactorAuthenticationService,
    JwtTwoFactorStrategy,
  ],
  controllers: [AuthenticationController, TwoFactorAuthenticationController],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
