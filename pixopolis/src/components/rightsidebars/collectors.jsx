import React from 'react';
import Follow from './follow';
function Collectors({imgg,profile,name}){
  return (
  <div className='collectors'>
    <div className='profile'>
      <img src={imgg} alt={profile} />
      <div className='attherate'>
        <div className='name'>
          <p>{name}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="1vw" viewBox="0 0 15 14" fill="none"><path d="M5.33636 13.9454L4.12727 11.8287L1.83636 11.2995L2.05909 8.85211L0.5 6.99999L2.05909 5.14788L1.83636 2.70044L4.12727 2.17127L5.33636 0.0545654L7.5 1.0137L9.66364 0.0545654L10.8727 2.17127L13.1636 2.70044L12.9409 5.14788L14.5 6.99999L12.9409 8.85211L13.1636 11.2995L10.8727 11.8287L9.66364 13.9454L7.5 12.9863L5.33636 13.9454ZM6.83182 9.34821L10.4273 5.61091L9.53636 4.65178L6.83182 7.46302L5.46364 6.07394L4.57273 6.99999L6.83182 9.34821Z" fill="#000AFF"/></svg>
        </div>
        <p>@{name}</p>
      </div>
    </div>
    <Follow/>
  </div>
  );
}
export default Collectors;