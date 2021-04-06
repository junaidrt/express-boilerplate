import express from "express";

const router = express.Router();

router.get('/images/:fileName', (req, res) => {
    res.sendFile(req.params.fileName, {root: "public/images"});
});

export default router;