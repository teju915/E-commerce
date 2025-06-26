import React, { createContext, useState, useEffect } from 'react'

export const ContextApp = createContext(null)

const Context = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load from localStorage on first render
        const saved = localStorage.getItem('cartproducts');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        // Save cart to localStorage when cartItems change
        localStorage.setItem('cartproducts', JSON.stringify(cartItems));
    }, [cartItems]);
    let addToCart = (product) => {
        const existProduct = cartItems.find((item) => item.id == product.id)
        if (existProduct) {
            setCartItems((prev) => prev.map((item) => (
                item.id === product.id ? { ...item, count: item.count + 1 } : item
            )))
        }
        else {

            setCartItems([...cartItems, { ...product, count: 1 }])
        }
    }
    const removeProducts = (id) => {
        setCartItems((prev) => {
            const existing = prev.find(item => item.id === id);
            if (existing.count === 1) {
                return prev.filter(item => item.id !== id);
            } else {
                return prev.map(item =>
                    item.id === id ? { ...item, count: item.count - 1 } : item
                );
            }
        });
    };
    const value = { addToCart, cartItems, setCartItems, removeProducts }
    return <ContextApp.Provider value={value}>{props.children}</ContextApp.Provider>
}

export default Context