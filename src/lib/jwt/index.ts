// implementation of the jsonwebtoken library
import jwt from 'jsonwebtoken';
import { EXPIRES_IN, JWT_SECRET, JWT_SECRET_REFRESH } from './config';

// Implement token generation logic here
const generateToken = (user: any) => {
    try {
        const token = jwt.sign(user, JWT_SECRET, { expiresIn: EXPIRES_IN });
        return token;
    } catch (error) {
        return error;
    }
};
const generateRefreshToken = (user: any) => {
    try {
        const token = jwt.sign(user, JWT_SECRET_REFRESH, { expiresIn: EXPIRES_IN });
        return token;
    } catch (error) {
        return error;
    }
};

// Implement token verification logic here
const verifyToken = (token: string) => {
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        return decodedToken;
    } catch (error) {
        return error;
    }
};
const verifyRefreshToken = (token: string) => {
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET_REFRESH);
        return decodedToken;
    } catch (error) {
        return error;
    }
};
export {
    generateToken,
    generateRefreshToken,
    verifyToken,
    verifyRefreshToken
};
