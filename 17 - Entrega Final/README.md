# WORKSHOP FINAL REACT

Proyecto de práctica para finalización y aprobación del curso de REACT JS, parte fundamental en mi proceso para convertirme en Desarrollador Full Stack.

## Objetivos

El propósito final es desarrollar un e-commerce con datos solo de prueba, que sea funcional para realizar un completo proceso de compra, simple y efectivo.

### Barra de Navegación  
Apartado que nos permite navegar sobre nuestro proyecto.

### Catálogo de Productos  
Apartado que nos sirve para exhibir nuestros productos.

### Filtrado por Categorías  
Se cuenta con una lógica de filtrado de productos, según su categoría.

### Detalle de Producto  
Apartado donde podremos ver al detalle un producto seleccionado.  
Botón de agregado al carrito.  
Contamos también con un contador, que definirá la cantidad de unidades que queramos agregar al carrito.

### Carrito de Compras  
El proyecto cuenta con una lógica de compra, siendo coherente al stock disponible de cada producto y su precio.  
El apartado de Carrito de Compra exhibe los productos presentes en el carrito y cuenta con los respectivos botones para la finalización de la compra.

### Checkout  
El apartado encargado de la finalización de la compra.  
Presenta al usuario un formulario donde ingresará los datos necesarios para generar la orden de compra (persistente en BD).

## Librerías Utilizadas

- **React** `^19.0.0`  
  Biblioteca principal para construir la interfaz de usuario basada en componentes.

- **React DOM** `^19.0.0`  
  Permite renderizar los componentes React en el DOM del navegador.

- **React Router DOM** `^7.4.0`  
  Librería para manejar las rutas dentro de la aplicación y navegar entre páginas sin recargar.

- **Firebase** `^11.6.0`  
  Utilizado como backend para el proyecto, tanto para la base de datos como para el almacenamiento (y/o autenticación si la usaste).

- **Dotenv** `^16.4.7`  
  Para manejar variables de entorno de forma segura, como claves de configuración de Firebase.

- **Bootstrap (CDN)**  
  Framework de CSS utilizado para dar estilo a la interfaz y facilitar el diseño responsive. Agregado mediante CDN en el archivo `index.html`.
