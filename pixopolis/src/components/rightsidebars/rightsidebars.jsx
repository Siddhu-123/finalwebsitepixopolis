import React from 'react';
import Trencoll from './trencollectors';
import Topcrea from './topcreators';
function Rightsidebars({trendingclick2, topclick2}){
  return (
  <div className='rightsidebars'> 
  <Trencoll trendingclick={trendingclick2}/>
  <Topcrea topclick={topclick2}/>
  </div>
  );
}
export default Rightsidebars;