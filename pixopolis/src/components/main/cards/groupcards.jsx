import React from 'react';
import Card from './card';
import i1 from '../../../images/square/fig (20).jpg';
import i2  from '../../../images/square/fig (10).jpg';
import i3  from '../../../images/square/fig (11).jpg';
import i4  from '../../../images/square/fig (12).jpg';
import i5  from '../../../images/square/fig (13).jpg';
import i6  from '../../../images/square/fig (14).jpg';
import i7  from '../../../images/square/fig (15).jpg';
import i8  from '../../../images/square/fig (16).jpg';
const images=[i1,i2,i3,i4,i5,i6,i7,i8];
const names =["cool things","show man","yell it ","awesome","things there","apamsampam","kirikiri","jingidi"];
const floors =["1.96ETH","11.34ETH","7.62ETH","9.45ETH","3.56ETH","7.62ETH","9.45ETH","3.56ETH"];
const vols =["13.96ETH","51.34ETH","90.62ETH","19.45ETH","33.56ETH","90.62ETH","19.45ETH","33.56ETH"];
export const Groupcards = ({style}) => {
    return (
      <div className='groupcards' style={style}>
        {images.map((image,index) => (
          <Card key={index} imgg={image} name={names[index]}  floor={floors[index]}   vol={vols[index]}
          />
        ))}
      </div>
    );
  };
  
export default Groupcards;