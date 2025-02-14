import express from "express";
import { Request, Response, NextFunction } from "express";
import morgan from "morgan"
// import { handleCors } from "@/midlewares";
import path from "node:path";
import { PORT } from "./config";
import cors from "cors"

const app = express();

app.set("PORT", PORT);

app.use(cors())
app.use(morgan("dev"))
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Use /api/v1 routes
app.get("/", (_req: Request, res: Response) => {
	try {
		res.status(200).json({
			message: "Welcome to the API!",
		});
	} catch (err) {
		const error = err as Error
		res.status(401).json({
			message: error.message,
		});
	}
});

// Middleware de manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Imprime el error en consola para depuración
    res.status(500).json({
        message: 'Something went wrong!',
        error: err.message, // En un entorno de producción, evita enviar mensajes detallados
    });
});

// Listen server
app.listen(app.get("PORT"), () => {
    console.log(`http://localhost:${app.get("PORT")} is running!`);
})


