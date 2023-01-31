import "dotenv/config";
import express from "express";
import router from "./routes/index.routes";
import error from "./middleware/error.middleware";

const app = express();

app.listen(process.env.PORT, async () => {
    app.use(router)

    app.use(error)
});