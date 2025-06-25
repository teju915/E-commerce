import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.jpg';
import './Navbar.css';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TbTopologyRing, TbGiftCard } from "react-icons/tb";
import { GiCardboardBox } from "react-icons/gi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GrTrophy } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { BiStore } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { ContextApp } from '../context/Context';
import { UserProvider } from '../context/UserContext';


const Navbar = () => {

  
  
  const { cartItems } = useContext(ContextApp);
  const [display, setDisplay] = useState(true)
  console.log(cartItems);

  return (
    
    <nav className="navbar flex justify-between items-center p-3 bg-white shadow">
      
        <Link to="/">
          <img style={{ height: '60px' }} src={logo} alt="Logo" />
        </Link>
      
      <div className="navbar-menus relative me-10 text-black">
        <ul className='flex flex-row items-center gap-10'>
          <li>
            <Categories href="/login" ContentSection={CategoriesList}>
              <CgProfile className='w-6 h-6' /> Login
            </Categories>
          </li>
          <li className='flex items-center gap-1 cursor-pointer'>
            <Link to='/cart' className='flex items-center gap-1 cursor-pointer'>
              <div className='relative'>
                <div className='cart-count top-2'><span>{cartItems.length}</span></div>
                <IoCartOutline className='w-6 h-6' />
              </div>
              <span>Cart</span>
            </Link>
          </li>
          <li className='flex items-center gap-1 cursor-pointer'>
            <BiStore className='w-6 h-6' />
            <span>Become a Seller</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Categories = ({ children, href, ContentSection }) => {
  const [open, setOpen] = useState(false);
  const [btnColor, setBtnColor] = useState(false);
  const showContent = open && ContentSection;

  const buttonStyle = {
    position: "relative",
    padding: "10px 10px",
    borderRadius: "0.5rem",
    backgroundColor: btnColor ? '#03a9f4' : '#fff',
    color: btnColor ? '#fff' : '#000',
    cursor: "pointer"
  };

  return (
    <div
      onMouseEnter={() => { setOpen(true); setBtnColor(true) }}
      onMouseLeave={() => { setOpen(false); setBtnColor(false) }}
      style={buttonStyle}
    >
      <Link to={href} className='flex items-center gap-2'>
        {children}
        {open ? <IoIosArrowUp className='w-4 h-4' /> : <IoIosArrowDown className='w-4 h-4' />}
      </Link>
      {showContent && (
        <div className="absolute left-0 top-full z-50">
          <ContentSection />
        </div>
      )}
    </div>
  );
};

const CategoriesList = () => {
  return (
   
    
    <div className="w-60 bg-white rounded-xl shadow-lg mt-2 login-drop-list">
      <div className="flex justify-between p-3 border-b border-slate-200">
        <h3 className="cursor-pointer text-black">New Customer?</h3>
        <Link to='/login'>
        <h3 className="cursor-pointer text-blue-600">Login</h3>
        </Link>
      </div>
      <ul className="p-3 space-y-2 capitalize text-sm">
        <li className="flex items-center gap-2 cursor-pointer"><CgProfile className='w-5 h-5' /> My Profile</li>
        <li className="flex items-center gap-2 cursor-pointer"><TbTopologyRing className='w-5 h-5' /> Flipkart Plus Zone</li>
        <li className="flex items-center gap-2 cursor-pointer"><GiCardboardBox className='w-5 h-5' /> Orders</li>
        <li className="flex items-center gap-2 cursor-pointer"><MdOutlineFavoriteBorder className='w-5 h-5' /> Wishlists</li>
        <li className="flex items-center gap-2 cursor-pointer"><GrTrophy className='w-5 h-5' /> Rewards</li>
        <li className="flex items-center gap-2 cursor-pointer"><TbGiftCard className='w-5 h-5' /> Gift Cards</li>
      </ul>
    </div>
    
  );
};

export default Navbar;
