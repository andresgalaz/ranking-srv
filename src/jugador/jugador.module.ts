import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JugadorController } from './jugador.controller';
import { JugadorService } from './jugador.service';
import { Jugador, JugadorSchema } from './schemas/jugador.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Jugador.name, schema: JugadorSchema }]),
  ],
  controllers: [JugadorController],
  providers: [JugadorService],
})
export class JugadorModule {}
