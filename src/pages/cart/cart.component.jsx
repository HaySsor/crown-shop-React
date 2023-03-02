import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.components';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './cart.style';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import {useSelector} from 'react-redux';
import PaymentForm from '../../components/payment-form/payment-form.component';
function Cart() {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader as='header'>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <Total>Total : ${total}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
}

export default Cart;
