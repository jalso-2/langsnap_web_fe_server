const express = require('express');

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.static('www'));

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));