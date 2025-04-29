import { z } from "zod";

export const UserSchema = z.object({
	accountId: z.string(),
	avatarUrls: z.object({
		"32x32": z.string(),
	}),
	displayName: z.string(),
});

export type User = z.infer<typeof UserSchema>;
