import React from 'react';
import Collectors from './collectors';
import i from '../../images/profile.jpeg';
import i1 from '../../images/profile1.jpeg';
import i2 from '../../images/profile2.jpg';
import i3 from '../../images/profile4.jpg';
function Trencoll({trendingclick}){
  const seeall = () => {
    trendingclick();
  };
  return (
  <div className='trencoll'>
    <div className='text'>
      <p>Trending Collectors</p>
      <p onClick={seeall}>See all{">"}</p>
    </div>
    <div className='collect'>
      <Collectors imgg={i} profile="alkamani" name="alkamani"/>
      <Collectors imgg={i1} profile="arunkalie" name="arunkalie"/>
      <Collectors imgg={i2} profile="williumson" name="williumso"/>
      <Collectors imgg={i3} profile="barstro josh" name="barstrojo"/>
    </div>
  </div>
  );
}
export default Trencoll;