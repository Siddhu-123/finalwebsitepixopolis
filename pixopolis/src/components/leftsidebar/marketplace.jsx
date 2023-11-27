import React from 'react';
import Menu from './menu';
import m1 from '../../images/drops.svg';
import m2 from '../../images/virtualland.svg';
import m3 from '../../images/dashboard.svg';
import m4 from '../../images/stats.svg';
import m5 from '../../images/drops1.svg';
import m6 from '../../images/virtualland1.svg';
import m7 from '../../images/dashboard1.svg';
import m8 from '../../images/stats1.svg';
const theme = window.myGlobalVariable;
function Marketplace({dashboardclick,virtuallandclick,dash1}){
    const imageUrls = theme ? 
    {m1:m1,m2:m2,m3:m3,m4:m4}
    :{
      m1:m5,m2:m6,m3:m7,m4:m8
      };
  return (
    <div className='marketplace' >
      <span>Marketplace</span>
      <div className='marketplace1'>
        <Menu imgg1={imageUrls.m3} imgg2 = {imageUrls.m2} txt="Dashboard" txt1 = "Virtualland" onbuttonclickleft={dashboardclick} onbuttonclickright={virtuallandclick} dash2={dash1}/>
      </div>
    </div>
  );
}
export default Marketplace;