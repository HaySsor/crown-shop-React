import React, {Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import {selectIsCartOpen} from '../../store/cart/cart.selector';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import {useSelector} from 'react-redux';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.style';

function Navigation() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/sing-in'>SIGN-IN</NavLink>
          )}
          <CardIcon />
        </NavLinksContainer>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default Navigation;
