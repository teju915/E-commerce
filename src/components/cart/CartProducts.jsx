import React, { useContext, useEffect, useState } from 'react'
import { ContextApp } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import './cart.css'

const CartProducts = () => {
    const navigate = useNavigate();
    const { cartItems, addToCart, setCartItems } = useContext(ContextApp);

    const [cartAmt, setCartAmt] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [finalTotal, setFinalTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        const discountPercentage = 10;

        cartItems.forEach((item) => {
            total += Number(item.count * item.price);
        });

        total = Math.round(total * 100) / 100;

        const discountValue = total * (discountPercentage / 100);
        const final = Math.round((total - discountValue) * 100) / 100;

        setCartAmt(total);
        setDiscount(discountPercentage);
        setFinalTotal(final);
    }, [cartItems]);

    console.log("Cart Amount:", cartAmt);
    console.log("Discount %:", discount);
    console.log("Final Total:", finalTotal);


    const removeProducts = (id) => {
        const updateCart = cartItems.map((prod) => {
            if (prod.id == id && prod.count > 1) {
                return { ...prod, count: prod.count - 1 }
            }
            else if (prod.id == id && prod.count <= 1) {
                return null;
            }
            return prod;
        })
        const filterCart = updateCart.filter((product) => product !== null)
        setCartItems(filterCart)
    }
    return (

        <section className="container px-5 py-10 mx-auto  text-gray-600 body-font bg-white my-10">
            <div className="flex flex-wrap justify-around ">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    {cartItems.length === 0 ? (
                        <h1 className="text-2xl font-semibold text-center">Your cart is empty.</h1>
                    ) : (
                        cartItems.map((product) => (
                            <div className="flex flex-col md:flex-row  gap-10 w-full shadow mb-5 p-5" key={product.id}>
                                <img src={product.image} className='w-40  min-w-40 h-40' />
                                <div className='flex flex-col'>
                                    <div className="details my-2">
                                        <div>
                                            <h2 className='text-2xl text-bold text-black mb-2'>{product.title}</h2>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className='add-remove-btn my-4'>
                                            <button onClick={() => removeProducts(product.id)}>-</button>
                                            <input type="text" value={product.count} className='outline-none ' />
                                            <button onClick={() => addToCart(product)}>+</button>
                                        </div>
                                        <p>₹{product.price * product.count}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-md p-8 flex flex-col w-full mt-10 md:mt-0 h-fit">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5 uppercase border-b-1 pb-5">Price Details</h2>
                    <div className="flex justify-between relative">
                        <h2 className="leading-7  text-gray-600  mb-4">Price ({cartItems.length}&nbsp;items)</h2>
                        <h2 className="leading-7  text-gray-600  mb-4">{cartAmt}</h2>
                    </div>
                    <div className="flex justify-between relative">

                        <h2 className="leading-7  text-gray-600  mb-4"><span>Discount</span></h2>
                        <h2 className="leading-7  text-gray-600  mb-4"><span>{discount}%</span></h2>

                    </div>
                    <div className="flex justify-between relative">

                        <h2 className="leading-7  text-gray-600  mb-4"><span>Discount</span></h2>
                        <h2 className="leading-7  text-gray-600  mb-4"><span>{finalTotal}</span></h2>

                    </div>
                    <button className="text-white bg-[#03a9f4] border-0 py-2 px-8 focus:outline-none hover:bg-[#03a8f4a2] duration-200 cursor-pointer rounded text-lg" onClick={() => navigate('/')}>Checkout</button>
                </div>
            </div>


        </section>

    )
}

export default CartProducts