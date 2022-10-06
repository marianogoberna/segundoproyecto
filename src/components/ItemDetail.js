import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { productos } from "./data/productos"

const ItemDetail = () => {

  const {id: ItemId} = useParams() 

  const [item, setItem] = useState({})

  useEffect(() => {
    getItemDetails().then(response => {
      setItem(response)
    })
  
  }, [])
  
  
  const getItemDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve (productos.find( p => p.id == ItemId ))
      }, 1000);

    } )

  }

  return (
    <div className="m-8">
      <div>{item.nombre}</div>
      <div>Precio:{item.precio}</div>
    </div>
  )
}
export default ItemDetail