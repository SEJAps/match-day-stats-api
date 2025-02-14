import { v4 as uuidv4 } from 'uuid';

export const createError = (...args: string[]): void => {
    const [name, msg] = args
    const err = new Error(msg)
    err.name = name
    throw err
}
export const usersErrors = {
    usersNotFound: {
        name: "usersNotFound",
        message: "Users not found. Please add users first."
    }
}

export const uniqueId: () => string = () => {
    return uuidv4()
}
// export const ACCEPTED_ORIGINS: string[] = ["http://localhost:5173"];

// export const createOrigin = (origins: string | string[]) => {
//     let accepetedOrigins: string | string[] = ACCEPTED_ORIGINS;
//     if (origins && Array.isArray(origins)) {
//         accepetedOrigins = origins
//     }
//     const origin = (origin: any, callback: any) => {
//         if (accepetedOrigins.includes(origin)) return callback(null, true)
//         if (!origin) return callback(null, true)
//         return callback(new Error("Not allowed by CORS"))
//     }
//     return { origin }
// }