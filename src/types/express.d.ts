import { RequestHandler, Response, NextFunction, RequestParamHandler } from "express";


interface DecodedToken {
    uid: string;
    email: string;
    name: string;
    iat: number;
    exp: number;
}

type TToken = string;

declare module 'express' {

    export interface Request {
        user?: DecodedToken | null;
        token?: TToken;

    }

    // export interface HandlerMiddlewareAuthorize {
    //     (
    //         req: Request,
    //         res: Response | any,
    //         next: NextFunction
    //     ): void;
    // }

}
