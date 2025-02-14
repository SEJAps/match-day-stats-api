import { verifyRefreshToken, verifyToken } from "@/lib/jwt";
import { CODE_ERRORS_JWT } from "@/lib/jwt/config";
import { DecodedToken } from "@/types/express";
import { NextFunction, Request, Response } from "express";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('authorization')?.split(" ")[1] as string;

    // If the token is missing, send a 401 Unauthorized response
    if (!token) {
        res.status(401).json({ error: CODE_ERRORS_JWT.missing_token });
    }

    try {
        // Implement token verification logic here
        const verifiedToken = verifyToken(token) as DecodedToken;

        if (verifiedToken.name === CODE_ERRORS_JWT.expired_token.name) {
            res.status(400).json({ error: CODE_ERRORS_JWT.expired_token });
        } else if (verifiedToken.name === CODE_ERRORS_JWT.invalid_token.name) {
            res.status(400).json({ error: CODE_ERRORS_JWT.invalid_token });
        }
        req.user = verifiedToken;
        // console.log(req.user)

        // If the token is valid, move on to the next middleware or route
        next();

    } catch (error: any) {
        // Pasar cualquier otro error al manejador global de errores
        next(error);
    }
}

// export const refreshToken = (req: Request, res: Response, next: NextFunction) => {
//     // Implement token refresh logic here
//     const refreshToken = req.header('authorization')?.split(" ")[1] as string;
//     if (!refreshToken) {
//         res.status(401).json({ error: CODE_ERRORS_JWT.missing_token });
//     }
//     try {
//         const verifiedToken = verifyRefreshToken(refreshToken) as DecodedToken;
//         if (verifiedToken.name === CODE_ERRORS_JWT.expired_token.name) {
//             res.status(400).json({ error: CODE_ERRORS_JWT.expired_token });
//         } else if (verifiedToken.name === CODE_ERRORS_JWT.invalid_token.name) {
//             res.status(400).json({ error: CODE_ERRORS_JWT.invalid_token });
//         } else {
//             if (req.user) {
//                 req.user = {
//                     ...req.user,
//                     refreshToken
//                 };
//             }
//         }
//         next();
//     } catch (error) {
//         next(error);
//     }
//     // Example: Generate a new token with the same user information
//     // const newToken = generateToken(req.user);
//     // res.json({ token: newToken });
// }