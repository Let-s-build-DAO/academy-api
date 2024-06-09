import { Request, Response, NextFunction } from 'express';
import { CelebrateError } from 'celebrate';

import AppError from '@shared/errors/AppError';

export default function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  if (error instanceof CelebrateError) {
    const bodyMessage = error.details.get('body')?.message;
    const queryMessage = error.details.get('query')?.message;
    const paramsMessage = error.details.get('params')?.message;

    return response.status(400).json({
      status: 'error',
      message: bodyMessage || queryMessage || paramsMessage,
    });
  }

  // if (error instanceof MulterError && error.code === 'LIMIT_UNEXPECTED_FILE') {
  //   return response.status(400).json({
  //     status: 'error',
  //     message: `${error.message} ${error.field}, max image uploads allowed are 2.`,
  //   });
  // }

  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    console.error(error);
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
