import { Router } from "express";
import { createOneUser, getAllUsers, getOneUser } from "./handlers.js";
const router = Router();
router.get(`/`, getAllUsers);
router.post(`/`, createOneUser); 
router.get(`/:id`, getOneUser);
export default router;