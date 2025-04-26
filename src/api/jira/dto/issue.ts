import { z } from "zod";
import { ChangelogSchema } from "./changelog";
import { UserSchema } from "./user";
import { BaseWebhookEventSchema } from "./webhook";

export const ProjectSchema = z.object({
	id: z.string(),
	name: z.string(),
	avatarUrls: z.object({
		"32x32": z.string(),
	}),
});

export const IssueTypeSchema = z.object({
	name: z.string(),
	subtask: z.boolean(),
});

export const IssueSchema = z.object({
	id: z.string(),
	self: z.string(),
	key: z.string(),
	fields: z.object({
		statuscategorychangedate: z.string(),
		issuetype: IssueTypeSchema,
		project: ProjectSchema,
		creator: UserSchema,
		description: z.string().nullable(),
		summary: z.string(),
		created: z.string(),
		updated: z.string(),
		statusCategory: z.object({
			id: z.number(),
			key: z.string(),
			colorName: z.string(),
		}),
		priority: z.object({
			name: z.string(),
			id: z.string(),
		}),
	}),
});

export const IssueCreatedWebhookEventSchema = BaseWebhookEventSchema.extend({
	changelog: ChangelogSchema,
	issue: IssueSchema,
});

export type IssueCreatedWebhookEvent = z.infer<typeof IssueCreatedWebhookEventSchema>;
