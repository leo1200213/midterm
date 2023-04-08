//import express from "express";
//import users from "./api/v1/users/index.js";
//const rootRouter = express.Router();
//rootRouter.use("/api/v1/users", users);
//export default rootRouter;

//import { Router } from "express";
///import { getCsrfToken } from "./handlers.js";

//const router = Router();
//router.get(`/csrf-token`, getCsrfToken);
//export default router;


import express from "express";
import glob from "glob";

const rootRouter = express.Router();

async function autoloadRoutes() {
  const jsfiles = await glob("**/index.js", {
    cwd: "src/routes",
    ignore: "index.js",
  });
  const importTasks = jsfiles.map(async (path) => {
    const module = await import(`./${path}`);
    if (module.default === undefined) return;
    rootRouter.use(`/${path.slice(0, -9)}`, module.default);
  });
  return Promise.all(importTasks);
}
await autoloadRoutes();

export default rootRouter;
