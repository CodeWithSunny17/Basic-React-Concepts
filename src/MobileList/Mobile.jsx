import React from 'react'
import MobileList from './MobileList'
import data from "./data.json"

export default function Mobile() {

    return (
        <div>
            {data.map((x) =>{
                return <MobileList
                  key = {x.key}
                  image = {x.image}
                  title = {x.title}
                  price = {x.price}
                />
            })
            }
        </div>
    )
}
