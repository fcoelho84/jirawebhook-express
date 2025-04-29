import { type Prisma, PrismaClient } from "@prisma/client";
import type { DefaultArgs } from "@prisma/client/runtime/library";
import type { IssueWebhookEvent } from "./dto/issue";
import type { SprintWebhookEvent } from "./dto/sprint";

export class WebhookIssueRepository {
	private db: Prisma.IssueDelegate<DefaultArgs, Prisma.PrismaClientOptions>;

	constructor() {
		this.db = new PrismaClient().issue;
	}

	async create(issue: IssueWebhookEvent["issue"]) {
		return this.db.create({
			data: {
				id: Number(issue.id),
				createdAt: issue.fields.created,
				updatedAt: issue.fields.updated,
				description: issue.fields.description ?? "",
				point: 0, // customfield
				summary: issue.fields.summary,
				SprintId: 0, // customfield
			},
		});
	}
}

export const webhookIssueRepository = new WebhookIssueRepository();
