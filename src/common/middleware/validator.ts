import type { NextFunction, Request, Response } from "express";
import { ZodError, type z } from "zod";

import { StatusCodes } from "http-status-codes";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const validate = (schema: z.ZodObject<any, any>) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse(req.body);
			next();
		} catch (error) {
			if (error instanceof ZodError) {
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				const errorMessages = error.errors.map((issue: any) => ({
					message: `${issue.path.join(".")} is ${issue.message}`,
				}));
				res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid data", details: errorMessages });
			} else {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
			}
		}
	};
};
