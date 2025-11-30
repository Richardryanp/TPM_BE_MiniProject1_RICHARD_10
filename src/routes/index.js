import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Coffee Catalog API",
    routes: ["/api/coffees (GET)", "/api/coffees (POST)"]
  });
});

export default router;
