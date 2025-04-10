import { useEffect, useState, useContext} from "react"
import { Link, useParams } from "react-router-dom"
import { db } from "../../services/config"
import { collection, doc, getDoc } from "firebase/firestore"
import QuantitySelector from "../QuantitySelector/QuantitySelector"

const ItemDetailContainer = () => {
  const [item, setItem] = useState()
  const [loading, setLoading] = useState(true)
  let { id } = useParams()


  useEffect(() => {
    const prodsRef = doc(collection(db, "products"), id)
    const prodData = getDoc(prodsRef)
      .then((res) => {
        setItem({ id: res.id, ...res.data() })
        setLoading(false)
      })
  }, [])


  return (
    <div className="container d-flex justify-content-center mt-3">
      {loading ? <div className="alert alert-warning"> Cargando</div> :
      <div className="row d-flex justify-content-center">
        <div className="card" key={item.id}>
          <img src={item.img} className="card-img-top" alt="imgCard" />
          <div className="card-body">
            <h5 className="card-title"> {item.title} </h5>
            <p className="card-text">STOCK:: {item.stock} </p>
            <p className="card-text">PRECIO: {item.price} </p>
            <QuantitySelector item={item}/>
          </div>
          </div>
        </div>
        }
    </div>

  )
}


export default ItemDetailContainer