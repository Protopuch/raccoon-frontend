import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import reducer from './reducers'
import { Provider } from "react-redux";
import Header from "./components/Header";
import ResponseStatusBar from "./components/ResponseStatusBar";
import ResponseHistoryList from "./components/ResponseHistoryList";

const store = createStore(reducer);

const render = () => {
    console.log(store);
    console.log(store.getState());
    ReactDOM.render(<Provider store = { store } >
            <Header dispatcher = { store } store = { store.getState().simpleStore } />
            <ResponseStatusBar store = { store.getState().simpleStore } />
            <ResponseHistoryList store = { store.getState().simpleStore } />
        </Provider>,
        document.getElementById('root'));
};

store.subscribe(render);

render();

serviceWorker.unregister();
