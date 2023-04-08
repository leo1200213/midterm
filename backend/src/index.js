import express from "express";
import path, { dirname } from "path";
import { prisma } from "./adapters.js";
import rootRouter from "./routes/index.js";
import { fileURLToPath } from "url";
import session from 'express-session';
import cookieParser from "cookie-parser";
import { csrfErrorHandler,doubleCsrfProtection } from "./csrf.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const frontendDir = path.join(__dirname, "../../frontend/dist");

const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(frontendDir));

app.use(express.json());


if (process.env.NODE_ENV === "production") {
app.set("trust proxy", 1);
}
app.use(
session({
cookie: {
httpOnly: true,
sameSite: "strict",
secure: process.env.NODE_ENV === "production",
maxAge: null, // session cookie
},
// use random secret
name: "sessionId", // don't omit this option
secret: process.env.SESSION_SECRET,
resave: false,
saveUninitialized: false,
})
);

app.use(cookieParser());
app.use(doubleCsrfProtection);
app.use(csrfErrorHandler);
app.use(rootRouter); 

app.get("/visit", (req, res) => {
    console.log(req.session);
    if (typeof req.session.view === "number") {
    req.session.view++;
    } else {
    req.session.view = 0;
    }
    res.send(`<h1>Visit: ${req.session.view}</h1>`);
    });

app.get("*", (req, res) => { // Keep as the last routeç
if (!req.originalUrl.startsWith("/api")) {
return res.sendFile(path.join(frontendDir, "index.html"));
}
return res.status(404).send();
});
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});

process.on("exit", async () => {
    await prisma.$disconnect();
    });
    