import React,{useState} from 'react';
import Groupcards from './groupcards';
export const Cards = ({heading}) => {
    const [translateValue, setTranslateValue] = useState(0);
    const handleButtonClick = (buttonValue) => {
      setTranslateValue(buttonValue);
    };
    return (
        <div className="cardsmain">
                <div className='txtcontrols'>
                    <p>{heading}</p>
                    <div className='controls'>
                        <div className='left' onClick={() => handleButtonClick(0)}>{"<"}</div>
                        <div className='right' onClick={() => handleButtonClick(-50)}>{">"}</div>
                    </div>
                </div>
                <Groupcards style={{ transform: `translateX(${translateValue}%)` }}/>
        </div>
    );
}
export default Cards;