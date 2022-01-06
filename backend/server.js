import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// base URL
app.use("/api/v1/restaurants", restaurants);

// wild card routes
app.use("*", (req, res) => {
  res.status(404).json({ err: "Not found" });
});

export default app;
