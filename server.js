const express = require('express');
const cors = require('cors');
const {resolve} = require('path');
const PORT = process.env.PORT || 9000;
const StatusError = require('./helpers/status_error');
const defaultErrorHandler = require('./middleware/default_error_handler');
const app = express();

global.StatusError = StatusError;
global.__rootdir = __dirname;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve(__dirname, 'client', 'dist')));

const routes = require('./routes');
app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

//error handler is always at the very end
app.use(defaultErrorHandler);

app.listen(PORT, () => {
    console.log('Server running @ localhost:', PORT);
});
