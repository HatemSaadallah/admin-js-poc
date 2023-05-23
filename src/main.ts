import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
// import { setupAdminPanel } from './admin-panel/admin-panel.plugin.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // await setupAdminPanel(app);

  await app.listen(3000);
}
bootstrap();
