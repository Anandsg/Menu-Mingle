import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
// import MenuItemList from '../../components/Menu/MenuItemList';
import { clearCart } from '../../utils/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const dispatch = useDispatch();
    const HandleclearCart = () => {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className='p-4 ' >
            <div className='flex justify-between w-7/12 m-auto py-4'>
                <h2 className='font-bold'>your cart - {cartItems.length}</h2>
                <div>
                    <button className='bg-orange-300 text-blcak rounded-md px-2 m-2]'
                        onClick={HandleclearCart}>
                        clear cart
                    </button>
                </div>
            </div>
            <div className="w-8/12 m-auto">
                {cartItems.map((item) => (
                    <CartItem key={item?.card?.info?.id} {...item.card.info} />
                ))}
            </div>

        </div>
    )
}

export default Cart;