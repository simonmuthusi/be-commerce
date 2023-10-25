/* eslint-disable @typescript-eslint/no-var-requires */
import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './users/entities/user.entity';
import { APP_PIPE } from '@nestjs/core';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { Category } from './products/entities/category.entity';
import { ShoppingModule } from './shopping/shopping.module';
import { Order } from './shopping/entities/order.entity';
import { ShoppingCart } from './shopping/entities/shopping-cart.entity';

const cookieSession = require('cookie-session');

@Module({
  imports: [
    UsersModule,
    ReportsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          synchronize: true,
          entities: [User, Product, Category, ShoppingCart, Order],
        };
      },
    }),
    ProductsModule,
    ShoppingModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: ['cookie-string-1j12b3h1bj234b234jk'],
        }),
      )
      .forRoutes('*');
  }
}
