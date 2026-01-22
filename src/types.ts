// types.ts
import { IContext } from './context';

export interface IApiError {
  message: string;
  code: number;
  status: number;
}

export interface IApiRequest {
  body?: any;
  params?: any;
  query?: any;
  headers?: any;
}

export interface IApiResponse {
  data: any;
  error?: IApiError;
  meta: {
    statusCode: number;
    requestTime: Date;
  };
}

export interface IApiHandler {
  (ctx: IContext, req: IApiRequest): Promise<IApiResponse>;
}

export interface IApiRoute {
  path: string;
  method: string;
  handler: IApiHandler;
  middlewares?: IApiHandler[];
}