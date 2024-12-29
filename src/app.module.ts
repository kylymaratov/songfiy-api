import { Module } from '@nestjs/common';
//
import { AuthModule } from './modules/v1/auth/auth.module';
import { UserModule } from './modules/v1/user/user.module';
import { SongModule } from './modules/v1/song/song.module';

@Module({
  imports: [AuthModule, UserModule, SongModule],
})
export class AppModule {}
