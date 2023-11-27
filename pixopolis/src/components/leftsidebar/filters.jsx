import React from 'react';
import Cate from './categories';
function Fil(){
  return (
    <div className='filters'>
      <span>Filters</span>
      <div className='fil'> 
          <div className='categories'>Categories <Cate/></div>
      </div>
    </div>
  );
}
export default Fil;