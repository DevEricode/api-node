import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AnyObject, ObjectSchema, ValidationError } from 'yup';

type TValidation = <T extends AnyObject>(field: 'body' | 'header' | 'params' | 'query', schema: ObjectSchema<T>) => RequestHandler;

export const validation : TValidation =  (field, schema) => async (req, res, next) => {
  console.log('Teste!');

  try {
    await schema.validate(req[field], {abortEarly: false});

    return next();

  } catch (err) {
    const yupError = err as ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if(!error.path) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: errors,
    });
  }

};