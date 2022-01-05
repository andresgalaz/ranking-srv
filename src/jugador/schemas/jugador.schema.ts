import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JugadorDocument = Jugador & Document;

@Schema({ collection: 'players' })
export class Jugador {
  @Prop()
  id: number;
  @Prop()
  nickname: string;
  @Prop()
  status: string;
  @Prop()
  balance: number;
  @Prop()
  avatar: string;
}

export const JugadorSchema = SchemaFactory.createForClass(Jugador);
