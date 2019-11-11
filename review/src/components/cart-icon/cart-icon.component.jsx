import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'; 

import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
// 
const CartIcon = ({toggleCartHidden, cartItems}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartItems}</span>
    </div>
);
const mapStateToProps = (state) => {
    console.log('cart-icon mapStateToProps called');
    return ({
    cartItems: selectCartItemsCount(state)
})}
export default connect(
    mapStateToProps,
    {toggleCartHidden}
)(CartIcon); 