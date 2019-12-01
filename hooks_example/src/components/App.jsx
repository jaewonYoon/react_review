import React from 'react';
import UseEffectExample from './use-effect-example/use-effect-example.component';
import Test from '../components/example/example.component';

import './App.scss';



const App = (props) => {
    return (
        <>
            <Test/>  
            <UseEffectExample />
       </> 
    ); 
}

export default App; 

