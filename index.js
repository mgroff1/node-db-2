const server = require("./server");
const PORT = process.env.PORT || 5150;

server.listen(PORT, () => console.log(`\nlistening on ${PORT}\n`));
