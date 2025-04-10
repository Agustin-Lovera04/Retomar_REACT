import { Link } from "react-router-dom"

const Catalogo = ({items}) => {

  return (
    <div className="container">
      <div className="row gap-3 d-flex flex-row justify-content-center  flex-wrap">
        {items.map((item)=>
            <div className="card col-3 m-2" key={item.id} >
            <img src={item.img} className="card-img-top" alt="imgCard"/>
            <div className="card-body">
              <h5 className="card-title"> {item.title} </h5>
              <p className="card-text">PRECIO: {item.price} </p>
              <Link to={`/item/${item.id}`} className="btn btn-primary">Ver Detalle</Link>
            </div>
          </div>
        )}

        </div>
    </div>
  )
}

export default Catalogo