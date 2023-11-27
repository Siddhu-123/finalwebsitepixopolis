import React from 'react';
import ex from '../../../images/exploreicon.png';
import sh from '../../../images/shine.png';
export const Slides = ({txt1,txt2,imgg}) => {
    return (
        <div className="slides">
          <div class="slidestext">
            <div>{txt1}</div>
            <div>{txt2}</div>
            <div className='explore'>
                <div>
                    <img src={sh}/>
                </div>
                <div>Explore</div>
                <div>
                    <img src={ex}/>
                </div>
            </div>
          </div>
            <img src={imgg}/>
        </div>
    );
}
export default Slides;