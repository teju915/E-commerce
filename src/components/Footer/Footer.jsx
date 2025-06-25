import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Footer.css';
import '../../App.css'
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router'

const Footer = () => {

  return (

<div className=' bg-black'>
    <div className='footer-section text-white cursor-pointer text-sm lh-2 border-b-1 bg-black w-full'>

      <div className="footer-header">
        <h4 className='uppercase'>About</h4>
        <ul>
          <li><span>Contact Us</span></li>
          <li><span>About Us</span></li>
          <li><span>Careers</span></li>
          <li><span>Flipkart Stories</span></li>
          <li><span>Press</span></li>
          <li><span>Corporates Information</span></li>
        </ul>
      </div>
      <div className="footer-header">
        <h4 className='uppercase'>Group Company</h4>
        <ul>
          <li><span>Myntra</span></li>
          <li><span>Cleartrip</span></li>
          <li><span>Shopsy</span></li>
        </ul>
      </div>
      <div className='footer-header'>
        <h4 className='uppercase'>Help</h4>
        <ul>
          <li><span>Payments</span></li>
          <li><span>Shipping</span></li>
          <li><span>Cancellation & Return</span></li>
          <li><span>FAQ</span></li>
        </ul>
      </div>
      <div className='footer-header'>
        <h4 className='uppercase'>Consumer Policy</h4>
        <ul>
          <li><span>Cancellation & Return</span></li>
          <li><span>Terms of use</span></li>
          <li><span>Security</span></li>
          <li><span>Privacy</span></li>
          <li><span>Sitemap</span></li>
          <li><span>Grievance Redressal</span></li>
          <li><span>EPR Compliance</span></li>
        </ul>
      </div>
      <div className="footer-header address border-l-1 ps-4">
        <h4 className='capitalize'>Mail Us:</h4>
        <address>
          <p>Flipkart Internet Private Limited, </p>
          <p> Buildings Alyssa, Begonia &amp; </p>
          <p> Clove Embassy Tech Village, </p>
          <p> Outer Ring Road, Devarabeesanahalli Village, </p>
          <p> Bengaluru, 560103, </p>
          <p> Karnataka, India</p>
        </address>
        <div className='social-icons mt-5 '>
          <h4 className='capitalize'>about</h4>
          <div className='flex gap-4'>
            <Link to="/"><SiFacebook className='w-5 h-5' /></Link>
            <Link to="/"><FaTwitter className='w-5 h-5' /></Link>
            <Link to="/"><BsInstagram className='w-5 h-5' /></Link>
          </div>
        </div>
      </div>
      <div className="footer-header">
        <h4 className='capitalize'>Registered Office Address:</h4>
        <div>
          <p>Flipkart Internet Private Limited, </p>
          <p> Buildings Alyssa, Begonia &amp; </p>
          <p> Clove Embassy Tech Village, </p>
          <p> Outer Ring Road, Devarabeesanahalli Village, </p>
          <p> Bengaluru, 560103, </p>
          <p> Karnataka, India </p>
        </div>
        <p className='mb-3'> CIN : U51109KA2012PTC066107 </p>
        <p> Telephone: <a href="tel:044-45614700">044-45614700</a> / <a href="tel:044-67415800">044-67415800</a></p>
      </div>

    </div>
      <div className='copy-right text-center text-white py-5'>
        <p>Copyright @ 2025</p>
      </div>
</div>

  );
};

export default Footer;
