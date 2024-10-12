import React from 'react'
import './MobileList.css'

export default function MobileList(props) {
  return (
    <div className='container'>
      <img src={props.image} alt=''/>
      <div className='desc'>
        <h2>{props.title}</h2>
        <div>$ {props.price}</div>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
