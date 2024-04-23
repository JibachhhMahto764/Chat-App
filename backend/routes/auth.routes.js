import express from "express";
const router = express.Router();

router.get("/login",(req, res) => {
    res.send("login Route");
});

export default router; 