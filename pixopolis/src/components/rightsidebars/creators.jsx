import React from 'react';
function Creators({imgg,name,num,per}){
  return (
  <div className='topcreator'>
    <div className='profile'>
      <img src={imgg} alt={name} />
      <div className='attherate'>
        <div className='name'>
          <p>{name}</p>
        </div>
        <div className='eth'>
          <svg width="0.5vw" height="1vw" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0L0 7.17073L4 9.73171L8 7.17073L4 0ZM0 8.02439L4 14L8 8.02439L4 10.5854L0 8.02439Z" fill="#5E73FF"/>
          </svg>
          {num}
        </div>
        <div>+{per}%</div>
      </div>
    </div>
  </div>
  );
}
export default Creators;