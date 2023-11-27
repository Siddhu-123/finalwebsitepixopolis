import React from 'react';
import i1 from "../../images/github.png";
import i2 from "../../images/instagram.png";
import i3 from "../../images/youtube.png";
import i4 from "../../images/facebook.png";
import i5 from "../../images/linkedin.png";
export const Icons = () => {
    return (
        <div className="icons">
            <img src={i1}/>
            <img src={i2}/>
            <img src={i3}/>
            <img src={i4}/>
            <img src={i5}/>           
        </div>
    );
}
export default Icons;