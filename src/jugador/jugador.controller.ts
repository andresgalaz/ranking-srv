import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import { JugadorService } from './jugador.service';
import { Jugador } from './schemas/jugador.schema';

@Controller('jugador')
export class JugadorController {
  constructor(private jugadorService: JugadorService) {}

  @Get()
  async findFilter(@Req() req: Request): Promise<Jugador[]> {
    let filtro: number, limite: number, salto: number;

    // Si el filtro es un número, se busca por ID
    filtro = Number(req.query.filtro);
    if (!isNaN(filtro)) {
      const data = this.jugadorService.find({ id: filtro });
      // Si no encuentra un ID con el valor, sigue la busqueda
      if ((await data).length > 0) return data;
    }

    // Limite tiene valor por defecto 20, pero se puede cambiar si se requiere
    limite = Number(req.query.limite);
    // Salto se debe calcular : Nº Pagina * Limite, desde el Frontend
    salto = Number(req.query.salto);

    // Opciones de filtro para el FIND
    let opciones = {};
    if (req.query.filtro && req.query.filtro.toString().length > 0) {
      // Si filtro está presente se busca por el contenido de Nickname o Status
      opciones = {
        $or: [
          { nickname: new RegExp(req.query.filtro.toString(), 'i') },
          { status: new RegExp(req.query.filtro.toString(), 'i') },
        ],
      };
    }

    return this.jugadorService.find(opciones, limite, salto);
  }
}
