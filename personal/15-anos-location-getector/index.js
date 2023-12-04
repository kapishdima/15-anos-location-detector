const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();

app.get("/", async (req, res) => {
  const { data } = await axios.get("http://www.geoplugin.net/json.gp");

  return res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});
