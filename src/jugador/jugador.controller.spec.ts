import { NotFoundException, Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { doesNotMatch } from 'assert';
import { JugadorController } from './jugador.controller';
import { JugadorService } from './jugador.service';

describe('JugadorController', () => {
  let controller: JugadorController;
  let service: JugadorService;

  const jugadorServiceProvider = {
    provide: JugadorService,
    useValue: {
      find: jest.fn().mockResolvedValue([
        {
          id: 19,
          nickname: 'dfz qetypba',
          status: 'ahelf lxhñep',
          balance: 859728,
          avatar:
            'drive.google.com/thumbnail?id=1wy_udY0W2rebTfKDYVClfAbWewWqfzmd',
        },
        {
          id: 199,
          nickname: 'ñhm pcjpemc',
          status: 'ñnkak giehcj',
          balance: 868855,
          avatar:
            'drive.google.com/thumbnail?id=1fpl6FOG7Gi-X4oHH-dAm3b0UGDYJE9Jr',
        },
      ]),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [jugadorServiceProvider],
      controllers: [JugadorController],
    }).compile();

    controller = module.get<JugadorController>(JugadorController);
    service = module.get<JugadorService>(JugadorService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findFilter()', () => {
    it('Debería devolver un arreglo de jugadores', async () => {
      const mockReqEmpty: any = { query: { filtro: '' } };
      await expect(controller.findFilter(mockReqEmpty)).resolves.toEqual([
        {
          id: 19,
          nickname: 'dfz qetypba',
          status: 'ahelf lxhñep',
          balance: 859728,
          avatar:
            'drive.google.com/thumbnail?id=1wy_udY0W2rebTfKDYVClfAbWewWqfzmd',
        },
        {
          id: 199,
          nickname: 'ñhm pcjpemc',
          status: 'ñnkak giehcj',
          balance: 868855,
          avatar:
            'drive.google.com/thumbnail?id=1fpl6FOG7Gi-X4oHH-dAm3b0UGDYJE9Jr',
        },
      ]);
    });
  });
});
