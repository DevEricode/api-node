import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';

interface ICidades {
  nome: string;
  estado: string;
}

interface IFilter {
  filter?: string;
}

const bodyValidation: yup.Schema<ICidades> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

const queryValidation: yup.Schema<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3),
});


export const createBodyValidator = validation(bodyValidation);

export const createValidation = validation(queryValidation);


export const create = async (req: Request<{}, {}, ICidades>, res: Response) => {
  console.log(req.body);

  return res.send('Create!');
};
