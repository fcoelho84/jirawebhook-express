import { validate } from "@/common/middleware/validator";
import { Router } from "express";

import { webhookController } from "./controller";
import { BaseWebhookEventSchema } from "./dto/webhook";

const router = Router();

router.post("/webhook", validate(BaseWebhookEventSchema), webhookController.receive);

export default router;
