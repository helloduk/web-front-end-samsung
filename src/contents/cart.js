import React, {useContext}from 'react'
import { any, oneOf, oneOfType, shape, string, number, func } from 'prop-types';
import CartTotal from './../components/Cart/CartTotal';

const CartContext = React.createContext();

export const CartProvider = ({value, children}) => {
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

CartProvider.propTypes = {
    value: shape({
        title: string,
        products: oneOfType([
            shape({
                id: string,
                photo: string,
                name: string,
                price: number,
                amount: number,
                maxAmount: number,
            })
        ]),
        total: number,
        onUpdate: func,
    }),
    children:any,
};

export const useCart = () => {
    const value = useContext(CartContext);
    if (!value) {
        throw new Error(
            'useCart 훅은 CartProvider 컴포넌트 내부에서만 사용 가능합니다.'
        );
    }
    return value;
};