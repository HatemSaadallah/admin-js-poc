import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import {
  DATABASE,
  SEQUELIZE,
} from 'src/common/constants/application.constants';
import { Category, Item } from '../category/models';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(DATABASE),
      });
      sequelize.addModels([Category, Item]);
      return sequelize;
    },
    inject: [ConfigService],
  },
];
