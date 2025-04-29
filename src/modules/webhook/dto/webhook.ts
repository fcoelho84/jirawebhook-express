import { z } from "zod";

const issues = z.enum(["jira:issue_created", "jira:issue_updated", "jira:issue_deleted"]);
const sprint = z.enum(["sprint_closed", "sprint_created", "sprint_started", "sprint_updated"]);

export const BaseWebhookEventSchema = z.object({
	timestamp: z.number(),
	webhookEvent: z.union([issues, sprint]),
});

export type BaseWebhookEvent = z.infer<typeof BaseWebhookEventSchema>;
