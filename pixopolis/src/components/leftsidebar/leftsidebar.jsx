import React from 'react';
import Marketplace from './marketplace';
import Accside from './accside';
import sideline from '../../images/sideline.png';
import Fil from './filters';
function Leftsidebar({dashboardclick1,virtuallandclick1,createclick1,collectclick1,favclick1,setclick1}){
  return (
  <div className='leftsidebar'> 
    <Marketplace dashboardclick={dashboardclick1} virtuallandclick={virtuallandclick1}/>
    <img className='sideline' src={sideline}></img>
    {/* <Fil/> */}
    <Accside createclick= {createclick1} collectclick= {collectclick1} favclick= {favclick1} setclick= {setclick1}/>
    <img className='sideline' src={sideline}></img>
    <div className='logout'>
        <div>Logout</div>
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.7059 12.3552H10.4118M20.1176 16.2384L24 12.3552L20.1176 8.47198M13.6471 5.88319V4.58879C13.6471 3.9022 13.3744 3.24373 12.889 2.75824C12.4036 2.27275 11.7453 2 11.0588 2H4.58824C3.90179 2 3.24346 2.27275 2.75808 2.75824C2.27269 3.24373 2 3.9022 2 4.58879V20.1216C2 20.8081 2.27269 21.4666 2.75808 21.9521C3.24346 22.4376 3.90179 22.7103 4.58824 22.7103H11.0588C11.7453 22.7103 12.4036 22.4376 12.889 21.9521C13.3744 21.4666 13.6471 20.8081 13.6471 20.1216V18.8272" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
  </div>
  );
}
export default Leftsidebar;