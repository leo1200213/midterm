import { Router } from "express";
import { createOneUser, getAllUsers, getOneUser,getCsrfToken} from "./handlers.js";
const router = Router();
router.get(`/`, getAllUsers);
router.get(`/csrf-token`, getCsrfToken);
router.post(`/`, createOneUser); 
router.get(`/:id`, getOneUser);
export default router;