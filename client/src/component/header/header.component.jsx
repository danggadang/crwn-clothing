import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.style';
import { signOutStart } from '../../redux/user/user.action';
const Header = ({ currentUser, hidden, signOutStart }) => {
    // const { signOutStart } = this.props;
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
            </OptionLink>
                <OptionDiv to="/contact">
                    CONTACT
            </OptionDiv>
                {currentUser ?
                    <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv> :
                    <OptionLink to="/sign-in"> SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropDown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, hidden: selectCartHidden
});
const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);