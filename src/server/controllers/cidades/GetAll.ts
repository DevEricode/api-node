import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const getAllValidation: yup.ObjectSchema<IQueryProps> = yup.object().shape({
  page: yup.number().optional().moreThan(0),
  limit: yup.number().optional().moreThan(0),
  filter: yup.string().optional(),
});


export const getAllValidator = validation('query', getAllValidation);


export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {

  res.setHeader('acess-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count', 1);

  return res.status(StatusCodes.OK).json([
    {
      id: 1,
      nome: 'Rio de Janeiro',
    }
  ]);
};
