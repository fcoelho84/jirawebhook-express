import { z } from "zod";

export const ChangelogItemSchema = z.object({
	field: z.string(),
	fieldtype: z.enum(["custom", "jira"]),
	fieldId: z.string(),
	fromString: z.string().nullable(),
	toString: z.string(),
});

export type ChangelogItem = z.infer<typeof ChangelogItemSchema>;

export const ChangelogSchema = z.object({
	items: z.array(ChangelogItemSchema),
});

export type Changelog = z.infer<typeof ChangelogSchema>;
