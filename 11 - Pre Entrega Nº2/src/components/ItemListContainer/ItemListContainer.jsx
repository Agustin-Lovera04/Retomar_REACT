import { useEffect, useState } from "react"
import Catalogo from "../Catalogo/Catalogo"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategoryID } from "../../utils.js"


const ItemListContainer = () => {
  const [items, setItems] = useState([])
  let { categoryID } = useParams()

//CON ASYN Y AWAIT        RECORDAR!!1 USEEFFECT NO PUEDE RECIBIR FUNCIONES ASYNC EN SU PRIMER ARGUMENTO.
/*   useEffect(() =>{
    let getItems = async () => {
      let data = await getProducts()
      setItems(data)
    } 

    getItems()
  },[categoryID]) */


  //CON THEN
useEffect(() => {

  if(categoryID){
    getProductsByCategoryID(categoryID)
      .then(data=>{
        setItems(data)
      })
  }else{
 
    getProducts()
    .then(data => {
      setItems(data)
    })

  }


},[categoryID])

  return (
    <div className='container-fluid text-center'>
      <div className="row">
        <h1>ItemListContainer</h1>
      </div>
      <div className="row">
        { items.length > 0 ? <Catalogo items={items} /> : <p>Cargando...</p> }
      </div>
  
    </div>
  )
}

export default ItemListContainer