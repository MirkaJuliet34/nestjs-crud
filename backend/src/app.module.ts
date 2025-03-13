import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Variáveis de ambiente estarão disponíveis globalmente
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || '123456',
      database: process.env.DB_NAME || 'nestjs_crud',
      autoLoadEntities: true,
      synchronize: false, // ⚠️ NÃO usar em produção! Use migrations.
      logging: process.env.NODE_ENV !== 'production', // Apenas logar em dev
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
