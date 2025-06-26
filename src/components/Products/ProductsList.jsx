import React, { useContext, useEffect, useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductsList.css';
import '../../App.css';
import data from '../../assets/products/product.json'
import { ContextApp } from '../context/Context';

const ProductList = () => {

  const [carts, setCarts] = useState([]);
  const { addToCart, cartItems } = useContext(ContextApp)


  useEffect(() => {
    setCarts(data);
  }, []);


  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const groupedProducts = chunkArray(carts, 4);


  const AddCart = ({ produc }) => {
    const { cartItems, addToCart, removeProducts } = useContext(ContextApp);

    const cartItem = cartItems.find(item => item.id === produc.id);

    return (
      <>
        {cartItem && cartItem.count > 0 ? (
          <div className='add-remove-btn flex items-center gap-2 text-white'>
            <button
              className=""
              onClick={() => removeProducts(produc.id)}
            >-</button>

            <input
              type="text"
              value={cartItem.count}
              className=""
            />

            <button
              className=""
              onClick={() => addToCart(produc)}
            >+</button>
          </div>
        ) : (
          <button
            className="h-10 w-40 rounded text-white bg-black cursor-pointer"
            onClick={() => addToCart(produc)}
          >
            Add to Cart
          </button>
        )}
      </>
    );
  };

  const removeProducts = (id) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);

      if (existing.count === 1) {
        return prev.filter(item => item.id !== id);
      }

      return prev.map(item =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
    });
  };




  return (
    <>
      <div className="product-lists bg-white mt-10 mx-4 px-8 py-10 mb-10">
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-bold">Products</h2>
          <Link to="/products" className="text-blue-500 flex items-center">
            See All <FaArrowRight className='ms-2 w-4 h-4' />
          </Link>
        </div>

        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex space-x-4 min-w-[1024px]">
            {
              carts.map((prod, key) => (
                <div className="individual-product w-1/4 min-w-[220px] lg:min-w-[320px] md:min-w-[320px] bg-white p-5 rounded" key={prod.id}>
                  <Link to={`/products/${prod.id}`} className="block">
                    <img
                      className="object-contain object-center w-full h-48"
                      src={prod.image}
                      alt={prod.title}
                    />
                  </Link>
                  <div className="prod-detail flex flex-col my-4">
                    <h3 className="text-gray-600 text-sm h-16 overflow-hidden leading-5">{prod.title}</h3>
                    <div className='flex justify-between flex-col md:flex-row lg:flex-row'>
                      <p className="mt-2 font-semibold me-5">₹{prod.price}</p>
                      <AddCart produc={prod} />
                      {/* <button className='bg-black text-white duration-350 hover:border-1 hover:border-indigo-600 cursor-pointer rounded h-10 w-40' onClick={() => addToCart(prod, key)}><span>
                        Add to Cart</span></button> */}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="product-lists bg-white mt-10 mx-4 px-8 py-10 mb-10">
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-bold">Featured Products</h2>
          <Link to="/products" className="text-blue-500 flex items-center">
            See All <FaArrowRight className='ms-2 w-4 h-4' />
          </Link>
        </div>
        <div className='grid grid-cols-3 gap-3'>
          {groupedProducts.map((group, groupIndex) => (
            <div className="grid grid-cols-2 gap-4 mb-2 w-full border border-gray-200 rounded m-1 p-3" key={groupIndex}>
              {group.map((prod) => (
                <div className="w-1/2 min-w-full bg-white p-4 rounded shadow" key={prod.id}>
                  <Link to={`/products/${prod.id}`} className="block">
                    <img
                      className="object-contain object-center w-24 h-24"
                      src={prod.image}
                      alt={prod.title}
                    />
                  </Link>
                  <div className="flex flex-col my-4">
                    <h3 className="text-gray-600 text-sm h-16 overflow-hidden leading-5 whitespace-break-spaces">
                      {prod.title}
                    </h3>
                    <div className='flex justify-between flex-col'>
                      <p className="mt-2 font-semibold">₹{prod.price}</p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>

  );
};
export default ProductList;