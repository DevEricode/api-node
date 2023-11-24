import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'yup';

type TProperty = 'body' | 'header' | 'params' | 'query';

type TAllSchemas = Record<TProperty, Schema<unknown>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;


export const validation : TValidation = (schemas: Partial<TAllSchemas>) => async (req, res, next) => {
  console.log('Teste!');

  const errosResult: Record<string, Record<string, string>> = {};


  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
  
      
    } catch (err) {
      const yupError = err as ValidationError;
      const erros : Record<string, string> = {};
      yupError.inner.forEach((error) => {
        if (!error.path) return;
        erros[error.path] = error.message;
      });
  
      errosResult[key] = erros;

      
    }
  });
  
  if(Object.entries(errosResult).length === 0) {
    return next();

  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: errosResult,
    });
  }
  
};