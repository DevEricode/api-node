import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Olá dev!');
});

router.post('/cidades', CidadesController.createValidation, CidadesController.createBodyValidator, CidadesController.create);

export { router }; 