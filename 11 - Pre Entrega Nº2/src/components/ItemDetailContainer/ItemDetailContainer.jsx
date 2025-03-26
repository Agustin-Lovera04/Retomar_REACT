import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getProductByID } from "../../utils"


export const ItemDetailContainer = () => {
  const [item, setItem] = useState()
  let {id} = useParams()


  useEffect(() => {
    getProductByID(id)
      .then(data => {
        setItem(data)
      })
  },[])


  return (
    <div className="container d-flex justify-content-center mt-3">
      {item &&
      <div className="card col-3 m-2" key={item.id}>
      <img src={item.img} className="card-img-top" alt="imgCard"/>
      <div className="card-body">
        <h5 className="card-title"> {item.title} </h5>
        <p className="card-text">PRECIO: {item.price} </p>
        <Link to={`/item/${item.id}`} className="btn btn-primary">Ver Detalle</Link>
      </div>
    </div>
      }
    </div>
  )
}
