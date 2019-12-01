import React,{useState,useEffect} from 'react';

import './card.scss';

const Card = () => {
    const [value, setValue] = useState(0);
    const [effect ,setEffect] = useState(false);
    // useEffect( () => {
    //     console.log('useEffect');
    //     console.log(effect)

    //     return( ()=> {
    //         console.log('cleanUp');
    //         console.log(effect);
    //     })
    // })
    
    const increase = (event) => {
        setValue(value+1);    
    }
    const decrease = (event) => {
        setValue(value-1); 
    }
    return(
        <> 
            <div>
                this is a counter {value}
                <button onClick={increase}>증가 + </button>
                <button onClick={decrease}>감소 - </button>
            </div> 
            <div>
                try useEffect 
                <button onClick ={
                    () => {
                        setEffect(!effect);
                    }
                }>{`${effect}s`}</button>
            </div>
        </>
    );
}
export default Card; 