import React from 'react';
import './Sidebar.css'
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img className='image_icon' src={assets.add_icon} alt="" />
          <p>Ajouter</p>
        </NavLink>
        <NavLink to="/list"   className="sidebar-option">
          <img className='image_icon' src={assets.order_icon} alt="" />
          <p>Listes </p>
        </NavLink  >

        <NavLink to="/order"   className="sidebar-option">
          <img className='image_icon' src={assets.order_icon} alt="" />
          <p>Commandes</p>
        </NavLink  >
      </div>
    </div>
  );
};

export default Sidebar;