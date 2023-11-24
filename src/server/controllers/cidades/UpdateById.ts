import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number;
}

interface IBodyProps {
  nome: string;
}

const updateParamsByIdValidation: yup.ObjectSchema<IParamProps> = yup.object().shape({
  id: yup.number().integer().required().moreThan(0),

});

const updateBodyByIdValidation: yup.ObjectSchema<IBodyProps> = yup.object().shape({
  nome: yup.string().required().min(3),
});

export const UpdateParamsByIdValidator = validation('params', updateParamsByIdValidation);
export const UpdateBodyByIdValidator = validation('body', updateBodyByIdValidation);


export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  console.log(req.params);
  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};
