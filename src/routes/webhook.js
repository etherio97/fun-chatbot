const { Router } = require('express');
const handleMessage = require('../functions/handleMessage');

const router = Router();

router.use(express.json());

router.post('/telegram', async (req, res) => {
  const { message } = req.body;
  if (message) {
    await handleMessage(message);
  }
  res.status(204).end();
});

module.exports = router;
