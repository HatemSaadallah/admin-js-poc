import { Module } from '@nestjs/common';

import config from '../config';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: config,
      isGlobal: true,
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
