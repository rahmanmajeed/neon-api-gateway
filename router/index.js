const express = require("express");
const router = express.Router();
const proxy = require('../proxy')
const apiProxy = proxy.createProxyServer()

apiProxy.web()
router.use((req, res, next) => {
  console.log("requrest path: ", req.path);
  next();
});

router.get("/feeds", (req, res) => {
  res.send("response data");
});

module.exports = router;
