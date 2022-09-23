import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { func } from 'prop-types';
import {useCart} from '../../contents/cart';

export default function CartList() {
  const cart = useCart();
  return (
    <Container>
      {cart.products.map((product) => (
        <CartItem key={product.id} product={product}/>
      ))}
      <CartFooter/>
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
