

export type AppError = Error & {
  code: number;
  name?: string;
  message: string;
  validations?: object | null;
};


export type CreateErr = (message: string, code?: number, validations?: object) => Error;



interface IMemo { [id: number]: number }

type RequestOnchainFundsParams = {
  transactionId: string;
  message: string;
  amountIn: {
    amount: number;
    asset: string;
  };
  amountOut: {
    amount: number;
    asset: string;
  };
  amountFee: {
    amount: number;
    asset: string;
  };
  destinationAccount: string;
  memo: string;
  memoType: string;
};

type RpcRequestBody = {
  id: number;
  jsonrpc: string;
  method: string;
  params: RequestOnchainFundsParams;
};