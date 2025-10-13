const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Neighborhood Community Website Backend Running 🚀');
});

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
