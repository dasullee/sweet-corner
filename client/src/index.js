import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './components/app';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from './middleware/thunk.js'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
