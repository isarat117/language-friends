import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { FollowModule } from './follow/follow.module';
import { LanguageModule } from './language/language.module';
import { MessagingModule } from './messaging/messaging.module';
import { PhotoModule } from './photo/photo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    PostModule,
    FollowModule,
    LanguageModule,
    MessagingModule,
    PhotoModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
