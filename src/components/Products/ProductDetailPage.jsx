import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { ContextApp } from '../context/Context'
import '../../App.css'

const Products = () => {
  const { id } = useParams();
const { addToCart, cartItems } = useContext(ContextApp)
  console.log();
  let productList = localStorage.getItem("products");
  let products = productList ? JSON.parse(productList) : [];


  let product = products.find((prod) => (prod.id === parseInt(id)))
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-full mx-auto flex flex-wrap justify-around lg:px-20 px-1">
            <img alt={product.name} className="lg:w-1/3 w-full lg:h-auto h-64 object-container object-center rounded" src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2> */}
              <p className="text-gray-900 text-4xl title-font font-medium mb-1">{product.title}</p>
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#f4ed03]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#f4ed03]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#f4ed03]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#f4ed03]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#f4ed03]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <p className="leading-relaxed my-10">{product.description}</p>

              <div className="flex flex-col">
                <div className="title-font font-medium text-2xl text-gray-900 mb-5">
                  ₹{product.price}
                </div>
                <button className='bg-black text-white duration-350 hover:border-1 hover:border-indigo-600 cursor-pointer rounded h-10 w-40' onClick={() => addToCart(product, product.id)}><span>
                        Add to Cart</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Products