const express = require('express');
const app = express();
const port = 3000;



// Route to display the name, course code, and current GMT time
app.get('/', (req, res) => {
  const currentGMT = new Date().toISOString();  // Get current GMT time
  res.send(`Santoshi Lamichhane - WEB322 - ${currentGMT}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
