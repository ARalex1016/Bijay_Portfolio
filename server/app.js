import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import bijayLamaRouter from "./Routes/bijayLama.route.js";

dotenv.config({ path: "./Config.env" });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", bijayLamaRouter);

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server has started!");
});
