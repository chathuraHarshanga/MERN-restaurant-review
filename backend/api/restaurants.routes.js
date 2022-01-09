import express from "express";
import restaurentsCtrl from "../doa/restaurantsDAO.js";
const router = express.Router();

router.route("/").get((req, res) => res.send("hello world"));

export default router;
