import express from "express";
import {
  login,
  getAll,
  updateDetail,
  changePassword,
} from "../Controllers/bijayLama.controller.js";

let router = express.Router();

router.post("/", login);
router.get("/", getAll);
router.patch("/", updateDetail);
router.post("/changePassword", changePassword);

export default router;
