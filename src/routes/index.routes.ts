import express from "express";
import path from "path";
import nameRoutes from "./name/name.routes";

const router = express.Router();

router.use("/", express.static(path.join(__dirname, "..", "/assets")));
router.use("/api/v1", nameRoutes);
router.use(/[/|/index|/index.html]/, (request, response) => {
    return response.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
//router.use("*", notFound);
export default router;