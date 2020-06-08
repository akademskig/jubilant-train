import React from "react";
import { ReactComponent as Logo } from "../../assets/dragus.svg"
import "./header.styles.scss"
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCardHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { LogoContainer, OptionsContainer, HeaderContainer, OptionLink } from "./header.styles";

const Header = ({ currentUser, cartHidden }) => (

    <HeaderContainer>
        <LogoContainer>
            <Logo className="logo">

            </Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="#">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {!cartHidden ?
            <CartDropdown></CartDropdown> : null
        }

    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCardHidden
})
export default connect(mapStateToProps)(Header)