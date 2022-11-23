import React from 'react';
import './Menu.scss';
import {images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

const Menu = () => {
  return (
    <>
    <div className="app__menu flex__center section__padding" id='menu'>
      <div className="app__menu-title">
        <SubHeading title='Menu that fits your palatte'/>
        <h1 className='headtext__poppins'>Today&apos;s Special</h1>
      </div>

      <div className="app__menu-menus">
        <div className="app__menu-menu_wine flex__center">
          <h5>Wine & Beer</h5>

          <div className="app__menu-menu_items">
            {data.wines.map((wine,index) =>(
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>

        <div className="app__menu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app__menu-menu_cocktails flex__center">
          <h5>Cocktails</h5>

          <div className="app__menu-menu_items">
            {data.cocktails.map((cocktail,index) =>(
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
    </>
  )
}

export default Menu