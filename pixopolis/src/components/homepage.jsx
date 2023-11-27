import React,{useState} from 'react';
import Leftsidebar from './leftsidebar/leftsidebar';
import Rightsidebars from './rightsidebars/rightsidebars';
import Main from './main/main';
const Homepage = () =>{
    const [dash, setDash] = useState(1);
    const dashboardclick = () => {
        setDash(1);
      };
    const virtuallandclick = () => {
        setDash(2);
      };
    const createclick = () => {
        setDash(3);
      };
    const collectclick = () => {
        setDash(4);
      };
    const favclick = () => {
          setDash(5);
        };
    const setclick = () => {
        setDash(6);
      };
    const trending = () => {
        setDash(7);
      };
    const top = () => {
        setDash(8);
      };
      return(
        <div className='sidebars'>
            <Leftsidebar dashboardclick1={dashboardclick} virtuallandclick1= {virtuallandclick} createclick1= {createclick} collectclick1= {collectclick} favclick1= {favclick} setclick1= {setclick}/>
            <Main dash={dash}/>
            <Rightsidebars trendingclick2={trending} topclick2={top}/>
        </div>
    );
}

export default Homepage;