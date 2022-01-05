import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JugadorModule } from './jugador/jugador.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://creditu-assessment:ZsnF72CcRkC7TKoV@creditu-assessment.xavvj.mongodb.net/assessment',
    ),
    JugadorModule,
  ],
})
export class AppModule {}
