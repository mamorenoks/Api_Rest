import { Router } from "express";
import { getLogin } from "../controllers/login.controller";

const router = Router();

router.post("/login", getLogin);

export default router;
