import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
import thunk from 'redux-thunk' 

export default ({children}) => {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            {children}
        </Provider>
    );
}
