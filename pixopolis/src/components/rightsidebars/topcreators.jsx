import React from 'react';
import Creators from './creators';
import i from '../../images/profile.jpeg';
import i1 from '../../images/profile1.jpeg';
import i2 from '../../images/profile4.jpg';
function Topcrea({topclick}){
  const seeall = () => {
    topclick();
  };
  return (
  <div className='topcrea'>
    <div className='text'>
      <p>Top Creators</p>
      <p onClick={seeall}>See all{">"}</p>
    </div>
    <div className='collect'>
      <Creators imgg={i}  name="alkamani" num="32.567" per="234.568"/>
      <Creators imgg={i1} name="arunkali" num="62.934"per="456.345"/>
      <Creators imgg={i2} name="arunkali" num="78.371"per="766.345"/>
    </div>
  </div>
  );
}
export default Topcrea;