import { Handler } from 'express';

interface CorsOptions {
    allowedOrigins?: string[];
    allowedMethods?: string[];
    allowedHeaders?: string[];

}
const corsOptions = {
    allowedOrigins: ['http://localhost:5173', "*"],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
export default (options: CorsOptions = corsOptions) => {
    const handlerCors: Handler = (req, res, next): void => {
        const defaultAllowedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
        const defaultAllowedHeaders = ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'api_key', 'token'];

        // Determinar el origen del cliente
        const origin = req.headers.origin as string;

        // Permitimos origenes dinámicamente
        if (options.allowedOrigins && options.allowedOrigins.includes(origin)) {
            res.header('Access-Control-Allow-Origin', origin);
        } else if (!options.allowedOrigins) {
            // Si no se especifican orígenes, permitir todos
            res.header('Access-Control-Allow-Origin', '*');
        }

        // Definir las cabeceras permitidas (custom o por defecto)
        res.header(
            'Access-Control-Allow-Headers',
            options.allowedHeaders ? options.allowedHeaders.join(', ') : defaultAllowedHeaders.join(', ')
        );

        // Definir los métodos HTTP permitidos (custom o por defecto)
        if (req.method === 'OPTIONS') {
            res.header(
                'Access-Control-Allow-Methods',
                options.allowedMethods ? options.allowedMethods.join(', ') : defaultAllowedMethods.join(', ')
            );
            res.status(200).json({});
        }

        // Pasamos al siguiente middleware
        next();
    };
    return handlerCors
};
