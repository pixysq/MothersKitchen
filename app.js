const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const PORT = 3002;
app.use(express.static(path.join(__dirname, './mother-kitchen-frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, './mother-kitchen-frontend/dist/index.html')
  );
});

app.listen(PORT, () =>
  console.log(`The application started successfully on port ${PORT}`)
);
