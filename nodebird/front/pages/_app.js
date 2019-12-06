import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import {Provider} from 'react-redux'; 
import withRedux from 'next-redux-wrapper'; 
import {createStore} from 'redux';
import rootReducer from '../reducers';   
import PropTypes from 'prop-types';

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
export default withRedux((initialState,options) => {
    const store = createStore(rootReducer,initialState);
    return store; 
})(HomeApp);