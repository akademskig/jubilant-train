import React from "react";
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/dragus.svg"
import "./header.styles.scss"
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCardHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, cartHidden }) => (

    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo">

            </Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="#">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
            }
            <CartIcon />
        </div>
        {!cartHidden ?
            <CartDropdown></CartDropdown> : null
        }

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCardHidden
})
export default connect(mapStateToProps)(Header)