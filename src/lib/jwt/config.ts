// JWT 
export const JWT_SECRET = process.env.JWT_SECRET as string
export const JWT_SECRET_REFRESH = process.env.JWT_SECRET_REFRESH as string
export const EXPIRES_IN = '24h'
export const CODE_ERRORS_JWT = {
    invalid_token: {
        code: 100,
        name: 'JsonWebTokenError',
        message: 'Invalid token provided'
    },
    expired_token: {
        code: 101,
        name: 'TokenExpiredError',
        message: 'Token expired'
    },
    token_not_provided: {
        code: 102,
        name: 'NoTokenProvidedError',
        message: 'No token provided'
    },
    missing_token: {
        code: 103,
        name: 'MissingTokenError',
        message: 'Missing token, authorization denied.'
    }
}