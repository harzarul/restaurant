import React from 'react';
import './Laurels.scss';
import {images, data} from '../../constants';
import { SubHeading } from '../../components';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className="app__laurels-awards_card">
    <img src={imgUrl} alt="image" />

    <div className="app__laurels-awards_card_content">
      <p className='p__poppins'>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <>
    <div className="app__laurels app__bg app__wrapper section__padding" id='awards'>
      <div className="app__wrapper_info app__laurels-info">
        <SubHeading title='Awards & Recognition'/>
        <h1 className='headtext__poppins'>Our Laurels</h1>

        <div className="app__laurels-awards">
          {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
    </>
  )
}

export default Laurels