//import express from "express";
//import users from "./api/v1/users/index.js";
//const rootRouter = express.Router();
//rootRouter.use("/api/v1/users", users);
//export default rootRouter;

import { Router } from "express";
import { getCsrfToken } from "./handlers.js";

const router = Router();
router.get(`/csrf-token`, getCsrfToken);
export default router;


