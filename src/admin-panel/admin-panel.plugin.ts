import { INestApplication } from '@nestjs/common';
import { Database, Resource } from '@admin-bro/sequelize';

import AdminBro from 'admin-bro';

import * as AdminBroExpress from 'admin-bro-expressjs';
import CategoryResource from './resources/category.resource';

export async function setupAdminPanel(app: INestApplication): Promise<void> {
  /**
   * Register TypeORM adapter for using
   */
  AdminBro.registerAdapter({ Database, Resource });

  const adminBro = new AdminBro({
    resources: [CategoryResource],
    rootPath: '/admin',
    logoutPath: '/admin/logout',
  });

  const router = AdminBroExpress.buildRouter(adminBro);
  app.use(adminBro.options.rootPath, router);
}
