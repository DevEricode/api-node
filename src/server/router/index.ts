import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Olá dev!');
});

router.get('/cidades', CidadesController.getAllValidator, 
  CidadesController.getAll);

router.post('/cidades', CidadesController.createBodyValidator, 
  CidadesController.create);
  
router.get('/cidades/:id', CidadesController.GetByIdValidator, 
  CidadesController.getById);

router.put('/cidades/:id', CidadesController.UpdateParamsByIdValidator, 
  CidadesController.UpdateBodyByIdValidator, 
  CidadesController.updateById);

router.delete('/cidades/:id',CidadesController.DeleteByIdValidator, CidadesController.deleteById);

export { router }; 