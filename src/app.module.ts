import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://localhost:27017'),
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    ConfigModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
   console.log(process.env.MONGO_URI);
  }
}
