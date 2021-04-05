import express from "express";
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  res.send('Got a POST request')
})

export default router;
