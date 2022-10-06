import React from "react"
import { Link } from "react-router-dom"

const ItemCard = ( {id, nombre, precio} ) => {
  return (
    <Link to={"/shop/item/" + id}>
      <div className="m-6">
        <div>{id}</div>
        <div>{nombre}</div>
        <div>{precio}</div>
      </div>
    </Link>
  )
}
export default ItemCard