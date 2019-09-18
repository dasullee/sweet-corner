const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();



const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
    console.log('Server running @ localhost:', PORT);
});
