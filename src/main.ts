import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { AppService } from 'src/app.service.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const t = new AppService()
  await app.listen(3000);
}
bootstrap();
