const express = require('express');

const router = express.Router();

router.use(require('./AuthRouter'));
router.use(require('./UserRouter'));

module.exports = router;
