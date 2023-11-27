import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number;
}

const deleteByIdValidation: yup.ObjectSchema<IParamProps> = yup.object().shape({
  id: yup.number().integer().required().moreThan(0),

});


export const DeleteByIdValidator = validation('params', deleteByIdValidation);


export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};
