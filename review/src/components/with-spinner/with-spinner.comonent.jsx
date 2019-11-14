import React from 'react';
import {spinnerOverlay, spinnerContainer, SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) =>{
    return isLoading? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) :
    (
        <WrappedComponent {...otherProps}/>
    )
}
// const WithSpinner = WrappedComponent => {
//    const spinner = ({isLaoding, ...otherProps}) => {
//         return isLoading? (
//             <SpinnerOverlay>
//                 <SpinnerContainer/>
//             </SpinnerOverlay>
//         ) :
//         (
//             <WrappedComponent {...otherProps}/>
//         )
//    }
//    return spinner; 
// }
export default WithSpinner;