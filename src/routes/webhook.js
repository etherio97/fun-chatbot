const { Router, json } = require('express');
const handleMessage = require('../functions/handleMessage');

const router = Router();

router.use(json());

router.post('/telegram', async (req, res) => {
  const { message } = req.body;
  if (message) {
    await handleMessage(message);
  }
  res.status(204).end();
});

module.exports = router;
