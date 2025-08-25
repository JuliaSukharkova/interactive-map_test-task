import { Module } from '@nestjs/common';
import { HotelsController } from './hotels.controller';

@Module({
  imports: [],
  controllers: [HotelsController],
  providers: [],
})
export class AppModule {}
