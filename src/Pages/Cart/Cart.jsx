import React, { useContext } from 'react'
import './Cart.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cartItems, setCartItems, food_list, addToCart, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
    const heading = ["Items", "Title", "Price", "Quantity", "Total", "Remove"]
    const navigate = useNavigate()
    // Check if the cart is empty
    const isCartEmpty = Object.values(cartItems).every(item => item === 0);
    const handleRemoveItem = (itemId) => {
        setCartItems(prevItems => {
            const { [itemId]: removedItem, ...restItems } = prevItems;
            return restItems;
        });
    };

    return (
        <div className="cart">
            {
                isCartEmpty ?
                    (<h1 className='emptycart-heading'>"🍕🥤 Add Food to Satisfy Your Cravings! 🍟🍫"</h1>)
                    : (<>
                        <div className="cart-items">
                            <h2>"Fresh Food on the Move"</h2>
                            <div className="cart-items-title">
                                {heading.map((items, index) =>
                                    <p key={index}>{items}</p>
                                )}
                            </div>
                            <br />
                            <hr />
                            {food_list.map((item, index) => {
                                if (cartItems[item._id] > 0) {
                                    return (
                                        <>
                                            <div className="cart-items-title cart-items-item">
                                                <img className='food-pic' src={item.image} alt="" />
                                                <p>{item.name}</p>
                                                <p>${item.price}</p>
                                                <p className='cart-quntity'>
                                                    <img className='quantity' onClick={() => removeFromCart(item._id)} src={assets.remove_icon_red} alt='' />
                                                    <p>{cartItems[item._id]}</p>
                                                    <img className='quantity' onClick={() => addToCart(item._id)} src={assets.add_icon_green} alt='' />
                                                </p>
                                                <p>${item.price * cartItems[item._id]}</p>
                                                <p onClick={() => { handleRemoveItem(item._id) }} className='cross'>x</p>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                }
                                return null
                            })}
                        </div>
                        <div className="cart-bottom">
                            <div className="cart-total">
                                <h2>Cart Totals</h2>
                                <div>
                                    <div className="cart-total-details">
                                        <p>Subtotal</p>
                                        <p>${getTotalCartAmount()}</p>
                                    </div>
                                    <hr />
                                    <div className="cart-total-details">
                                        <p>Delivery Fee</p>
                                        <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                                    </div>
                                    <hr />
                                    <div className="cart-total-details">
                                        <b>Total</b>
                                        <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                                    </div>
                                </div>
                                <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                            </div>
                            <div className="cart-promocode">
                                <p>If you hava a promo code, Enter it here</p>
                                <div className="cart-promocode-input">
                                    <input type="text" placeholder='promo code' />
                                    <button>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </>
                    )}
        </div>
    )
}

export default Cart