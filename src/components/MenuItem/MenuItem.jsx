import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title,price,tags}) => {
  return (
    <>
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        <div className="app__menuItem-head_name">
          <p className='p__poppins'>{title}</p>
        </div>

        <div className="app__menuItem-head_dash"/>

        <div className="app__menuItem-head_price">
          <p className='p__poppins'>{price}</p>
        </div>
      </div>

      <div className="app__menuItem-sub">
        <p className="p__opensans">{tags}</p>
      </div>
    </div>
    </>
  )
}

export default MenuItem