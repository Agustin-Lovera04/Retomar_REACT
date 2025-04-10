import {NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-2 text-center">
          <NavLink to={'/'}><h1>BRAND</h1></NavLink>
        </div>
        <div className="col-xl-6">
          <ul className="d-flex justify-content-center gap-5 m-0 flex-wrap">
            <NavLink to={'/category/guitarra'}>Guitarras</NavLink>
            <NavLink to={'/category/bajo'}>Bajos</NavLink>
            <NavLink to={'/category/bateria'}>Bateria</NavLink>
            <NavLink to={'/category/armonica'}>Armonicas</NavLink>
            <NavLink to={'/category/saxofon'}>Saxofones</NavLink>
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