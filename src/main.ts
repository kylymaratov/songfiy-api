import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//
import { setApiCors } from './common/api-options/api.cors.option';
import { setApiDocs } from './common/api-options/api.docs.option';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { apiEnv } from './common/api-options/api.env.option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(`/api/${apiEnv.apiVersion}/`, {
    exclude: ['/', '/docs'],
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  setApiCors(app);
  setApiDocs(app);

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
