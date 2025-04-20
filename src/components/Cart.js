import {useSelector,useDispatch} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                {cartItems.length === 0 ? (
                    <h2 className="text-xl font-semibold">Your cart is empty</h2>
                ) : (
                    <div>
                        <button className="bg-red-500 text-white p-2 rounded" onClick={handleClearCart}>Clear Cart</button>
                        <h2 className="text-xl font-semibold">Items in your cart:</h2>
                        <ItemList items={cartItems} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default Cart;