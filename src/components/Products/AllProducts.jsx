import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductsList.css';
import { Link } from 'react-router-dom';
import data from '../../assets/products/product.json'


const AllProducts = () => {
  const [carts, setCarts] = useState([]);
  const [sort, setSort] = useState('');


  useEffect(() => {
    setCarts(data);
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className='flex justify-between mb-10'>
            <p>{carts.length} Products Available</p>
            <select name="sort" id="sort" className='sort-selection--style' onChange={(event) => setSort(event.target.value)}>
              <option value="">Sort By</option>
              <option value="low">Price(low)</option>
              <option value="high">Price(high)</option>
            </select>
          </div>
          <div className="flex flex-wrap -m-4">
            {
              (sort ? [...carts].sort((a, b) => {
                return sort === "low" ? a.price - b.price : b.price - a.price;
              }) : carts).
                map((product) => (
                  <div className="all-products lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                    <div className='bg-white p-10'>
                      <Link to={"/products/" + product.id} className="block relative  rounded overflow-hidden">

                        <img className="object-contain object-center w-full h-48 block" src={product.image}
                          alt={product.title} />
                        <div className="mt-4">
                          <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1 h-16 overflow-hidden leading-5">{product.title}</h3>
                          <p className="mt-1">₹{product.price}</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                )
                )
            }
          </div>
        </div>
      </section >
    </>
  );

};

export default AllProducts;
