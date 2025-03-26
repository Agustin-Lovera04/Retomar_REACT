
let products= [
    {
      "id": 1,
        "title": "Yamaha YAS-280 Alto Saxophone",
        "price": 1200.00,
        "category": "saxofon",
        "img": "/imagenes/gen.jpg"
      },
      {
        "id": 2,
        "title": "Selmer Paris Reference 54 Tenor Saxophone",
        "price": 4500.00,
        "category": "saxofon",
        "img": "/imagenes/gen.jpg"
      },
      {
        "id": 3,
        "title": "Fender Precision Bass Electric Bass",
        "price": 900.00,
        "category": "bajo",
        "img": "/imagenes/gen.jpg"
      },
        {
        "id": 4,
        "title": "Ibanez SR500 Electric Bass",
        "price": 750.00,
        "category": "bajo",
        "img": "/imagenes/gen.jpg"
      },
      {
        "id": 5,
        "title": "Pearl Export Acoustic Drum Set",
        "price": 1500.00,
        "category": "bateria",
        "img": "/imagenes/gen.jpg"
      },
        {
        "id": 6,
        "title": "Roland TD-17KVX Electronic Drum Set",
        "price": 2200.00,
        "category": "bateria",
        "img": "/imagenes/gen.jpg"
      },
        {
        "id": 7,
        "title": "Hohner Special 20 Harmonica",
        "price": 50.00,
        "category": "armonica",
        "img": "/imagenes/gen.jpg"
      },
        {
        "id": 8,
        "title": "Fender Stratocaster Electric Guitar",
        "price": 1100.00,
        "category": "guitarra",
        "img": "/imagenes/gen.jpg"
      },
        {
        "id": 9,
        "title": "Martin D-28 Acoustic Guitar",
        "price": 2800.00,
        "category": "guitarra",
        "img": "/imagenes/gen.jpg"
      },
        {
        "id": 10,
        "title": "Gibson Les Paul Electric Guitar",
        "price": 1200.00,
        "category": "guitarra",
        "img": "/imagenes/gen.jpg"
      }
]
export const getProducts = () => {
    return new Promise ( resolve => 
        resolve(products)
    )
}

export const getProductsByCategoryID = (categoryID) => {
    return new Promise((resolve, reject) => {
        let newProducts = products.filter(prod => prod.category === categoryID)
        resolve(newProducts)
    })
}

export const getProductByID = (id) => {

    return new Promise((resolve, reject) => {
        let product = products.find(prod => prod.id === parseInt(id))
        resolve(product)
    })

}