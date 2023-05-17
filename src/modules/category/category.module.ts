import { Global, Module } from '@nestjs/common';
import { categoryProviders } from './category.providers';
@Global()
@Module({
  providers: [...categoryProviders],
})
export class CategoryModule {}
