import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query } from "firebase/firestore";
import FilteredItems from "../FilteredItems/FilteredItems";
import ItemList from "../ItemList/ItemList";

export const ItemsContainer = () => {
  const [items, setItems] = useState([]);
  const [filteredItems,setFilteredItems] = useState([])
  const [loading, setLoading] = useState(true);
  let { categoryID } = useParams();

  useEffect(() => {
    const prodsData = query(collection(db, "products"));

    getDocs(prodsData).then((res) => {
      setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  
  }, []);


  useEffect(() => {
    if (categoryID) {
      const filtered = items.filter((item) => item.category === categoryID);
      setFilteredItems(filtered);
    }
  },[categoryID, items])

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center gap-4">
        {loading ? (
          <div className="alert alert-warning"> Cargando</div>
        ) : (
          <>
            {filteredItems.length > 0 ? 
            ( 
            < FilteredItems filteredItems={filteredItems} category={categoryID}/>
           ) 
            :
            ( 
              <>
                <ItemList items={items} />
              </> 
          )}
          </>
        )}
      </div>
    </div>
  );
};

export default ItemsContainer;
