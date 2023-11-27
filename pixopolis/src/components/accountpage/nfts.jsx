import React from 'react';
export const NFTSacc = ({imgg,name,nftname}) => {
    return (
        <div className='cardacc'>
            <div>
                <img src={imgg}/>
            </div>
            <div className='text'>
                <div className='name'>{name}</div>
                <div className='nftname'>{nftname}</div>
            </div>
        </div>
    );
}
export default NFTSacc;