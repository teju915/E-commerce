import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeSlider.css';
import Slider1 from '../../assets/HomeSlider/Slider1.webp';
import Slider2 from '../../assets/HomeSlider/Slider2.webp';
import Slider3 from '../../assets/HomeSlider/Slider3.webp';
import Slider4 from '../../assets/HomeSlider/Slider4.webp';
import Slider5 from '../../assets/HomeSlider/Slider5.webp';
import Slider6 from '../../assets/HomeSlider/Slider6.webp';
import Slider7 from '../../assets/HomeSlider/Slider7.webp';



const HomeSlider = () => {
    const sliders = [
        {
            url: Slider1,
            alt: 'name'
        },
        {
            url: Slider2,
            alt: 'name'
        },
        {
            url: Slider3,
            alt: 'name'
        },
        {
            url: Slider4,
            alt: 'name'
        },
        {
            url: Slider5,
            alt: 'name'
        },
        {
            url: Slider6,
            alt: 'name'
        },
        {
            url: Slider7,
            alt: 'name'
        }

    ]
    console.log("object", sliders);
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="homepage-slider bg-white m-4">
            <Slider {...settings} >
                {
                    sliders.map((slider) => (
                        <img src={slider.url} />
                    ))
                }
            </Slider>
        </div>

    )
}

export default HomeSlider;