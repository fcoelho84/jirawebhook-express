import type { IssueWebhookEvent } from "./dto/issue";
import type { SprintWebhookEvent } from "./dto/sprint";
import type { BaseWebhookEvent } from "./dto/webhook";
import { webhookIssueRepository } from "./issue.repository";

import { webhookSprintRepository } from "./sprint.repository";

export class WebhookService {
	async handle(event: BaseWebhookEvent) {
		if (event.webhookEvent.includes("sprint")) {
			return webhookSprintRepository.create((event as SprintWebhookEvent).sprint);
		}

		if (event.webhookEvent.includes("jira:issue")) {
			return webhookIssueRepository.create((event as IssueWebhookEvent).issue);
		}

		return null;
	}
}

export const webhookService = new WebhookService();
