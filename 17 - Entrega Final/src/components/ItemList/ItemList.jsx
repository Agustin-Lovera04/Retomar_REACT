import { Link } from "react-router-dom"

const ItemList = ({items}) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center gap-4">
        { items.map((item) => {
        return (
          <div className="card col-3" key={item.id}>
            <img src={item.img} className="card-img-top" alt="imgCard" />
            <div className="card-body">
              <h5 className="card-title"> {item.title} </h5>
              <p className="card-text">STOCK:: {item.stock} </p>
              <p className="card-text">PRECIO: {item.price} </p>
              <Link to={`/item/${item.id}`} className="btn btn-primary">
                Ver Detalle
              </Link>
            </div>
          </div>
          )
      })}
      </div>
      </div>
  )
}

export default ItemList