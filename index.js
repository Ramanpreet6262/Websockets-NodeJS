const express = require('express');

const app = express();

// Static Files
app.use(express.static('public'));

const PORT = process.env.PORT || 5030;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
