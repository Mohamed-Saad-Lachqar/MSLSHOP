import React from 'react';
import './home.css';
import Slider from "react-slick";
import board1 from "../../assets/board-1.png";
import board2 from "../../assets/board-2.png";
import board3 from "../../assets/board-3.png";
import board4 from "../../assets/board-4.png";
import { PiDressDuotone,PiShirtFoldedLight,PiBaby,PiWatchLight,PiSneaker } from "react-icons/pi";
import {PRODUCTS} from '../../products';
import ProductCard from './productCard';
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade:true,
      speed:2000,
      arrows:false,
      cssEase: "linear"
    };
     var settings2 = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      lazyload:true,
      speed:2000,
    };
export default function Home() {
  const card=       [<h1 className=' m-16 font-semibold text-6xl w-1/2'> <span className='text-red-600'>50%</span> off for your first shopping</h1>,<p className=' m-7 w-3/5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus commodi odit fuga quisquam pariatur ipsum eum? Et quas obcaecati id, ipsum quis quaerat expedita eum natus delectus voluptatibus vitae ullam.</p>]
          ;
  return (
    <div className='container w-full min-h-screen	'>
        <div className='home-header flex'>
     <div className=' left-side rounded-md items-center	 justify-left flex flex-col bg-slate-200  mr-4 my-4 h-full capitalize	py-3'>
      <div>catigories</div>
        <div className='catigorie flex w-full text-center text-l h-8 m-2 cursor-pointer items-center	 justify-left p-3'><PiShirtFoldedLight className='m-2.5' />men</div>
        <div className='catigorie flex w-full text-center text-l h-8 m-2 cursor-pointer items-center	 justify-left p-3'><PiDressDuotone className='m-2.5'/> women</div>
        <div className='catigorie flex w-full text-center text-l h-8 m-2 cursor-pointer items-center	 justify-left p-3'><PiBaby className='m-2.5'/>kids</div>
        <div className='catigorie flex w-full text-center text-l h-8 m-2 cursor-pointer items-center	 justify-left p-3'><PiSneaker className='m-2.5'/>shoes</div>
        <div className='catigorie flex w-full text-center text-l h-8 m-2 cursor-pointer items-center	 justify-left p-3'><PiWatchLight className='m-2.5'/>accessories</div>
     </div>
     <div className='right-side  ml-4 my-4 h-full'>
      <Slider {...settings} className='slider h-full'>
        <div className='w-full p-3'>
          {card}
          <img src={board1} alt='' className=" absolute w-96 h-96 bottom-3 right-5 rotate-45"  />
        </div>
        <div className='w-full p-3 ' >
          {card}
          <img src={board2} alt='' className="absolute w-96 h-96 bottom-3 right-5 " />
          </div>
        <div className='w-full p-3'>
          {card}
                    <img src={board3} alt='' className="absolute w-96 h-96 bottom-3 right-5 " />

          </div>
        <div className='w-full p-3'>
          {card}
                    <img src={board4} alt='' className="absolute w-96 h-96 bottom-3 right-5 " />

        </div>
        </Slider>
     </div>
    </div>
    <div className='w-full my-5 p-3 card-slider '> 
        <div className=' capitalize text-3xl text-red-600 mt-11 font-semibold'>shoes</div>

    <Slider {...settings2} className='slider2 '>
           {PRODUCTS.map((product)=>{
            
            return(product.catigorie==='shoe')?  <ProductCard data={product}/>:null;
            
           })}
              </Slider>

 </div>
    <div className='w-full my-5 p-3 card-slider '> 
        <div className=' capitalize text-3xl text-red-600 mt-11 font-semibold'>men's</div>

    <Slider {...settings2} className='slider2 '>
           {PRODUCTS.map((product)=>{
            
            return(product.catigorie==='men')?  <ProductCard data={product}/>:null;
            
           })}
              </Slider>

 </div>
 
    <div className='w-full my-5 p-3 card-slider '> 
        <div className=' capitalize text-3xl text-red-600 mt-11 font-semibold'>kids</div>

    <Slider {...settings2} className='slider2 '>
           {PRODUCTS.map((product)=>{
            
            return(product.catigorie==='kid')?  <ProductCard data={product}/>:null;
            
           })}
              </Slider>

 </div>
 
    <div className='w-full my-5 p-3 card-slider '> 
        <div className=' capitalize text-3xl text-red-600 mt-11 font-semibold'>kids</div>

    <Slider {...settings2} className='slider2 '>
           {PRODUCTS.map((product)=>{
            
            return(product.catigorie==='women')?  <ProductCard data={product}/>:null;
            
           })}
              </Slider>

 </div>
 
    </div>
  )
}
