import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type { IssueWebhookEvent } from "./dto/issue";
import type { SprintWebhookEvent } from "./dto/sprint";
import type { BaseWebhookEvent } from "./dto/webhook";
import { webhookService } from "./service";

class WebhookController {
	public async receive(request: Request<unknown, unknown, BaseWebhookEvent>, response: Response) {
		await webhookService.handle(request.body);
		response.status(StatusCodes.OK);
	}
}

export const webhookController = new WebhookController();
