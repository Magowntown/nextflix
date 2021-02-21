import express from "express";
import clientRouter from "./clientRouter.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import unogsRouter from "./api/v1/unogsRouter.js";
import mediaRouter from "./api/v1/unogsRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);

rootRouter.use("/api/v1/unogs", unogsRouter);
rootRouter.use("/api/v1/media", mediaRouter);


export default rootRouter;
