"use strict";
const express = require('express');
const app = express();
app.use(express.static('.'));

app.listen(3000, () => {
  console.log('Service workers step by step - http://localhost:3000');
});