import React, { useState } from 'react';
function Follow(){
    const [follow, setfollow] = useState(true);
    
    const handleDivClick = () => {
        setfollow((prev) => !prev);
    };
  return (
  <div className='follow' onClick={handleDivClick}>
        {follow ? (
          <div className='first'>
            follow
          </div>
        ) : (
          <div className='second'>
            following
          </div>
        )}
  </div>
  );
}
export default Follow;