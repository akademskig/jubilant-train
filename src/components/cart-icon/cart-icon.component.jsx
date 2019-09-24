import React from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { toggleCartDrowpdown } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleDropdown, cartItemsCount }) => (
    
    <div className="cart-icon" onClick={() => toggleDropdown()}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{cartItemsCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleDropdown: () => dispatch(toggleCartDrowpdown())
})

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);