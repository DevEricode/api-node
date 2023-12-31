import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface ICidades {
  nome: string;
}

const bodyValidation: yup.ObjectSchema<ICidades> = yup.object().shape({
  nome: yup.string().required().min(3),
});


export const createBodyValidator = validation('body', bodyValidation);


export const create = async (req: Request<{}, {}, ICidades>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(1);
};
