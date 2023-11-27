import React ,{useState}from 'react';
import Carousel from './corousel/carousel';
import Cards from './cards/cards';
import Footer from './footer'
import w1 from "../../images/work.png";
import i1 from "../../images/ethicon.svg";
import Createuploadimage from './createuploadimage';
export const Main = ({dash}) =>{
    const [translateValue, setTranslateValue] = useState(0);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(4);
    const leftClick = () => {
        if (left > 0) {
            setTranslateValue(translateValue + 20);
            setLeft(left - 1);
            setRight(right + 1);
        }
    };
    const rightClick = () => {
        if (right > 0) {
            setTranslateValue(translateValue - 20);
            setRight(right - 1);
            setLeft(left + 1);
        }
    };
    let content;
    if (dash==1) {
            content =<div>
            <div className='mains0' >
                <div className='shiftl' onClick={leftClick}>{"<"}</div>
                <Carousel value={translateValue} setTranslateValue={setTranslateValue}/>
                <div className='shiftr' onClick={rightClick}>{">"}</div>
            </div>
            <svg className='svg1' width="52vw" height="39" viewBox="0 0 863 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_414_982)">
                    <path d="M0.0317688 19.9998C432.085 19.9998 432.086 19.9998 432.163 0C432.24 20.0002 432.638 20.0002 863 20.0002C432.163 20.0002 432.163 20.0002 432.163 39C432.163 19.9998 432.086 19.9998 0.0329192 19.9998H0.0317688Z" fill="#E090FF" />
                </g>
                <path d="M432.163 0C432.086 20.0002 432.085 19.9998 0 19.9998C432.086 19.9998 432.163 19.9993 432.163 39C432.163 20.0002 432.163 20.0002 863 20.0002C432.638 20.0002 432.24 20.0002 432.163 0Z" stroke="black" />
                <defs>
                    <filter id="filter0_i_414_982" x="0" y="-0.00195312" width="863" height="39.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="3" dy="3" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_414_982" />
                    </filter>
                </defs>
            </svg>
            <Cards heading="Trending Collections" />
            <svg className='svg1' width="52vw" height="39" viewBox="0 0 863 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_414_982)">
                    <path d="M0.0317688 19.9998C432.085 19.9998 432.086 19.9998 432.163 0C432.24 20.0002 432.638 20.0002 863 20.0002C432.163 20.0002 432.163 20.0002 432.163 39C432.163 19.9998 432.086 19.9998 0.0329192 19.9998H0.0317688Z" fill="#E090FF" />
                </g>
                <path d="M432.163 0C432.086 20.0002 432.085 19.9998 0 19.9998C432.086 19.9998 432.163 19.9993 432.163 39C432.163 20.0002 432.163 20.0002 863 20.0002C432.638 20.0002 432.24 20.0002 432.163 0Z" stroke="black" />
                <defs>
                    <filter id="filter0_i_414_982" x="0" y="-0.00195312" width="863" height="39.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="3" dy="3" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_414_982" />
                    </filter>
                </defs>
            </svg>
            <Cards heading="Awesome Collections" />
            <svg className='svg1' width="52vw" height="39" viewBox="0 0 863 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_414_982)">
                    <path d="M0.0317688 19.9998C432.085 19.9998 432.086 19.9998 432.163 0C432.24 20.0002 432.638 20.0002 863 20.0002C432.163 20.0002 432.163 20.0002 432.163 39C432.163 19.9998 432.086 19.9998 0.0329192 19.9998H0.0317688Z" fill="#E090FF" />
                </g>
                <path d="M432.163 0C432.086 20.0002 432.085 19.9998 0 19.9998C432.086 19.9998 432.163 19.9993 432.163 39C432.163 20.0002 432.163 20.0002 863 20.0002C432.638 20.0002 432.24 20.0002 432.163 0Z" stroke="black" />
                <defs>
                    <filter id="filter0_i_414_982" x="0" y="-0.00195312" width="863" height="39.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="3" dy="3" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_414_982" />
                    </filter>
                </defs>
            </svg>
            <Cards heading="High Value Collections" />
            <svg className='svg1' width="52vw" height="39" viewBox="0 0 863 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_414_982)">
                    <path d="M0.0317688 19.9998C432.085 19.9998 432.086 19.9998 432.163 0C432.24 20.0002 432.638 20.0002 863 20.0002C432.163 20.0002 432.163 20.0002 432.163 39C432.163 19.9998 432.086 19.9998 0.0329192 19.9998H0.0317688Z" fill="#E090FF" />
                </g>
                <path d="M432.163 0C432.086 20.0002 432.085 19.9998 0 19.9998C432.086 19.9998 432.163 19.9993 432.163 39C432.163 20.0002 432.163 20.0002 863 20.0002C432.638 20.0002 432.24 20.0002 432.163 0Z" stroke="black" />
                <defs>
                    <filter id="filter0_i_414_982" x="0" y="-0.00195312" width="863" height="39.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="3" dy="3" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_414_982" />
                    </filter>
                </defs>
            </svg>
            <Footer/>
        </div>;
    }
    else if (dash == 2){
        content = <div className='virtuallandpage'><img src={w1}/></div>;
    }
    else if (dash == 3){ 
        content = 
        <div className="mainscreate">
            <div className='createnft'>
                <p>Create New NFT </p>
                <div className='createaccsection'>
                    <div className='createaccinfo'>
                        <img src={i1}/>
                        <div className='createaccinfoid'>
                            <p>0x5F238...27C1c42</p>
                            <p>Ethereum</p>
                        </div>
                    </div>
                    <p>Connected</p>
                </div>
                <p>Upload file</p>
                <Createuploadimage/>
                <div className='createpricingsection'>
                    <p>Put on marketplace</p>
                    <p>Enter price to allow users instantly purchase your NFT</p>
                    <p>Price</p>
                    <div className='createenterprice' >
                        <input type="text" />
                        <p>ETH</p>
                    </div>
                </div>
                <div className="createpricecal">
                    <div className="createcalprice">
                        <div className='price'>
                            <p>Price</p>
                            <p>25 ETH</p>
                        </div> 
                        <div className='price'>
                            <p>Pixopolis fee</p>
                            <p>1%</p>
                        </div>
                    </div>
                    <div className="createcalpriceresult">
                        <p>You will receive</p>
                        <p>24.75 ETH</p>
                    </div>
                </div>
                <div className='createlistingsection'>
                    <p>Date of listing expiration</p>
                    <div className='enterdate' >
                        <input type="text" />
                        <p>Select</p>
                    </div>
                </div>
                <div className="createentername">
                    <p>Name</p>
                    <input type="text" placeholder='e.g."Mountain minions and monkeys"'/>
                </div>
                <div className="createentername">
                    <p>Description  (Optional)</p>
                    <input type="text" placeholder='e.g. "It is a huge mountain with minions in it dancing and partying with the monkeys"'/>
                </div>
                <div className="createentername">
                    <p>Properties (Optional)</p>
                    <div className="sizeandtype">
                        <input type="text" placeholder='e.g."Size"'/>
                        <input type="text" placeholder='e.g."Size and type"'/>
                    </div>
                </div>
                <div className='createitem'>
                    <button>Create Item</button>
                </div>
            </div>
        </div>
    }
    else if (dash == 4){
        content = <p>The condition is 4. This content will be rendered instead.</p>;
    }
    else if (dash == 5){
        content = <p>The condition is 5. This content will be rendered instead.</p>;
    }
    else if (dash == 6){
        content = <p>The condition is 6. This content will be rendered instead.</p>;
    }
    else if (dash == 7){
        content = <p>The condition is 7. This content will be rendered instead.</p>;
    }
    else if (dash == 8){
        content = <p>The condition is 8. This content will be rendered instead.</p>;
    }
    return (
        <div className="main">
            <div className='mains'>
            {content}
            </div>
        </div>
    );
}
export default Main;
