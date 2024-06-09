import { Request, Response } from 'express';
import { container } from 'tsyringe';



export default class TokenController {
  /**
   * transfer
   */
  
  public async transfer(_request: Request, response: Response): Promise<Response<any, Record<string, any>>> {

   try {


    return response.json({res: 'Welcome'});

   } catch (error) {
    console.log(error)
    throw error
   }

  }


}