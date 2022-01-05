import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Jugador, JugadorDocument } from './schemas/jugador.schema';

@Injectable()
export class JugadorService {
  constructor(
    @InjectModel(Jugador.name)
    private readonly jugadorModel: Model<JugadorDocument>,
  ) {}

  async find(
    filtro: any,
    limite: number = 20,
    salto: number = 0,
  ): Promise<Jugador[]> {
    if (isNaN(limite)) limite = 20;
    if (isNaN(salto)) salto = 0;

    return this.jugadorModel
      .find(filtro, { _id: 0 })
      .sort({ id: 1 })
      .limit(limite)
      .skip(salto);
  }
}
