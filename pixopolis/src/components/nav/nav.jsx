import React from 'react';
import Pixo from './pixo';
import Searchbar from './searchbar';
import Conwallet from './conwallet';
import Accicon from './accicon';
import Carticon from './carticon';
import Themeicon from './themeicon';
import {Link} from 'react-router-dom';
function Nav(){
  return (
    <>
      <div className='nav'> 
        <Link to="/"><Pixo/></Link>
        <Searchbar/> 
        <Conwallet/>
        <Link to="/Account"><Accicon/></Link>
        <Link to="/Cart"><Carticon/></Link>
        <Themeicon/>
      </div>
    </>
);
}
export default Nav; 