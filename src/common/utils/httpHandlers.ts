import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type { ZodError, ZodSchema } from "zod";

export const validateRequest = (schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await schema.parseAsync({ body: req.body, query: req.query, params: req.params });
		next();
	} catch (err) {
		const errorMessage = `Invalid input: ${(err as ZodError).errors.map((e) => e.message).join(", ")}`;
		res.status(StatusCodes.BAD_REQUEST).send(errorMessage);
	}
};
