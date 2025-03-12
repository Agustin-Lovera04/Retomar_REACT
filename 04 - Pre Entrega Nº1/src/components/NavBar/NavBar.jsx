import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-2 text-center">
          <h1>BRAND</h1>
        </div>
        <div className="col-xl-6">
          <ul className="d-flex justify-content-center gap-5 m-0">
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
          </ul>
        </div>
        <div className="col-xl-2 text-center">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;