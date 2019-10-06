const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;
const StatusError = require('./helpers/status_error');
const defaultErrorHandler = require('./middleware/default_error_handler');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

global.StatusError = StatusError;

const routes = require('./routes');
app.use(routes);

//error handler is always at the very end
app.use(defaultErrorHandler);

app.listen(PORT, () => {
    console.log('Server running @ localhost:', PORT);
});
