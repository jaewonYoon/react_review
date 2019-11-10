import React from 'react';
import {connect} from 'react-redux'; 
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss'; 

const CartDropdown = ({cartItems}) => {
    return(
    <div className = 'cart-dropdown'>
        {cartItems ? cartItems.map(item => {
           const {id,name, imageUrl, price} = item;  
            return(
                <div className='cart-items' key={id}>
                    <p>{name}</p>
                    <div style={{backgroundImage: `url(${imageUrl})`, width:`30px`,height:`30px`}}/>
                    <p>${price}</p>
                </div>
            )
        }) : null 
    }
    
        <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
)
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});
export default connect(
    mapStateToProps
)(CartDropdown); 