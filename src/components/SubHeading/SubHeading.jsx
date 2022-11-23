import React from 'react';
import './SubHeading.scss';
import {images} from '../../constants';

const SubHeading = ({title}) => {
  return (
    <>
    <div className='header__subheading'>
      <p className='p__poppins'>{title}</p>
      <img src={images.spoon} alt="spoon" />
    </div>
    </>
  )
}

export default SubHeading