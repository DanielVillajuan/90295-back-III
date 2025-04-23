import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import LogMiddleware from './middlewares/logMiddleware';
import { ConfigModule, ConfigService } from '@nestjs/config';

const mongooseConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    // config es todo sobre variables de entorno
    uri: config.get('api_key'), // get trae lo que le pasemos por parametro en el .env
  }),
};

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync(mongooseConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes({ method: RequestMethod.ALL, path: '*' }); // se utilizara los middlewares para todas los metodos y path
  }
}
