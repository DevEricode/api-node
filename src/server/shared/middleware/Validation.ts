import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'yup';

type TValidation = (field: 'body' | 'header' | 'params' | 'query', schema: Schema) => RequestHandler;

export const validation : TValidation =  (field, schema) => async (req, res, next) => {
  console.log('Teste!');

  try {
    await schema.validate(req[field], {abortEarly: false});

    return next();

  } catch (err) {
    const yupError = err as ValidationError;
    const erros: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if(!error.path) return;
      erros[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      erros: erros,
    });
  }

};