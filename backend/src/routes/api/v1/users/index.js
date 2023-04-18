import { Router } from "express";
import { createOneUser, getAllUsers, getOneUser,getCsrfToken,login} from "./handlers.js";
console.log("usernameaa")
const router = Router();
router.get(`/`, getAllUsers);
router.get(`/csrf-token`, getCsrfToken);

router.post(`/`, createOneUser); 
router.post(`/`, login); 
router.get(`/:id`, getOneUser);
export default router;