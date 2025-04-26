import { z } from "zod";
import { BaseWebhookEventSchema } from "./webhook";

export const SprintWebhookEventSchema = BaseWebhookEventSchema.extend({
	sprint: z.object({
		id: z.number(),
		self: z.string(),
		state: z.string(),
		name: z.string(),
		startDate: z.string(),
		endDate: z.string(),
		completeDate: z.string(),
		createdDate: z.string(),
		originBoardId: z.number(),
		goal: z.string(),
	}),
});

export type SprintWebhookEvent = z.infer<typeof SprintWebhookEventSchema>;
