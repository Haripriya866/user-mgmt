const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.options("*", cors());

const port = 5001;
app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });
  