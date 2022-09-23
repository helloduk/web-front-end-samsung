import { number } from 'prop-types';
import CartTotal from './CartTotal';
import {useCart} from '../../contents/cart';

export default function CartFooter({
  ...restProps
}) {
  const cart = useCart;
  return(
    <footer {...restProps}>
    <CartTotal>{cart.totalPrice}</CartTotal>
  </footer>
  )
}

CartFooter.propTypes = {
  total: number.isRequired,
};
