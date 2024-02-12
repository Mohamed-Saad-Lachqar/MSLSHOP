import React from 'react'
import { FaEye } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

export default function ProductCard(props) {
  const  {prductName,price,productImg}=props.data;
  return (
    <div className='card'>
      <div className='card-items'>
      <FaEye className='look' />
      <MdAddShoppingCart className='add-card' />
      </div>
      <img src={productImg} alt="" className='card-img'/>
      <h1>{prductName}</h1>

<div>${price}</div>
    </div>
  )
}
