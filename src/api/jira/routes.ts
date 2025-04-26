import { validate } from "@/common/middleware/validator";
import { Router } from "express";

import { BaseWebhookEventSchema } from "./dto/webhook";

const router = Router();

router.post("/webhook", validate(BaseWebhookEventSchema), (req, res) => {
	res.send("Jira");
});

export default router;
