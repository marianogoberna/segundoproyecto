import { useEffect } from "react"
import { useState } from "react"
import React from "react"
import { productos } from "./data/productos"
import ItemCard from "./ItemCard"

const ItemList = () => {

  const [items, setItems] = useState([])  

  useEffect(() => {
    getProducts().then(response => {
        console.log(response);
        setItems(response)
    }

    )
  }, [])
    
  const getProducts = () => {
      return new Promise (resolve => {
          setTimeout(() => {
              resolve(productos)
          }, 1000);
      })
  }


  return (
    <>
        <div>ItemList</div>
        { items.map( i => <ItemCard key={i.id}  {...i}  /> ) }
    </>
  )
}
export default ItemList