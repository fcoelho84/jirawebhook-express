import { type Prisma, PrismaClient } from "@prisma/client";
import type { DefaultArgs } from "@prisma/client/runtime/library";
import type { SprintWebhookEvent } from "./dto/sprint";

export class WebhookSprintRepository {
	private db: Prisma.SprintDelegate<DefaultArgs, Prisma.PrismaClientOptions>;

	constructor() {
		this.db = new PrismaClient().sprint;
	}

	async create(sprint: SprintWebhookEvent["sprint"]) {
		return this.db.create({
			data: {
				boardId: sprint.originBoardId,
				completedAt: sprint.completeDate,
				createdAt: sprint.createdDate,
				endedAt: sprint.endDate,
				startedAt: sprint.startDate,
				goal: sprint.goal,
				id: sprint.id,
				name: sprint.name,
				state: sprint.state,
			},
		});
	}
}

export const webhookSprintRepository = new WebhookSprintRepository();
