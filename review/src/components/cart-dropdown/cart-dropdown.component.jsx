import React from 'react';
import {connect} from 'react-redux'; 
import {withRouter} from 'react-router-dom'; 
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'; 
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'; 

import './cart-dropdown.styles.scss'; 

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return(
    <div className = 'cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item ={cartItem} /> )  }         
        </div>
        <CustomButton
            onClick={
                () => {
                    history.push('/checkout');
                    toggleCartHidden(); 
                }
        }
        >Go TO CHECKOUT</CustomButton>
    </div>
)
}

const mapStateToProps = 
 createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(connect(
    mapStateToProps,
    {toggleCartHidden}
)(CartDropdown
)); 