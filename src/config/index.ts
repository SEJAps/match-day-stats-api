import dotenv from "dotenv";
dotenv.config();

const PORT: number | string = process.env.PORT_SERVER || 3501

const WELCOME: string = "Welcome to Api!"
const AUTHOR: string = "Juan Valdivia"
const VERSION: string = "1.0.0"

// Date
const DATE = new Date().toISOString()
const DATE_TIME = new Date().getTime()

export {
    PORT,
    WELCOME,
    AUTHOR,
    VERSION,
    DATE,
    DATE_TIME
}
