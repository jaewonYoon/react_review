//root 
import React from 'react';
import PropTypes from 'prop-types'; 
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import {Provider} from 'react-redux'; 
import withRedux from 'next-redux-wrapper'; 
import {createStore,compose,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'; 
import rootReducer from '../reducers';   
import rootSaga from '../sagas';
const HomeApp = ({Component, store}) => (
    <>
    <Provider store={store}>
        <Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css"/>
        </Head>
        <AppLayout>
            <Component />
        </AppLayout>
    </Provider>
    </>
)
HomeApp.propTypes= {
    component: PropTypes.elementType,
    store: PropTypes.object 
}

const configureStore = (initialState,options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middleWares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middleWares))
        : compose(
        applyMiddleware(...middleWares),
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    const store = createStore(rootReducer,initialState,enhancer);
    sagaMiddleware.run(rootSaga);
    return store;   
}

export default withRedux(configureStore)(HomeApp);