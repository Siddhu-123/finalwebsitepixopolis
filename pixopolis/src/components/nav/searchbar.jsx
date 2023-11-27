import React from 'react';

export const Searchbar = () => {
    return (
        <>
        <div className="searchbar">
            <svg width="1.2vw" height="1.2vw" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0703 20.0444C21.9769 18.1313 23.1556 15.4922 23.1556 12.5778C23.1556 6.73583 18.4197 2 12.5778 2C6.73583 2 2 6.73583 2 12.5778C2 18.4197 6.73583 23.1556 12.5778 23.1556C15.5053 23.1556 18.1551 21.9663 20.0703 20.0444ZM20.0703 20.0444L28.5 28.5" stroke="black" stroke-width="3" stroke-linecap="round"/></svg>
            <input type='text' placeholder='Search items, collections and accounts'></input>        
        </div>
        </>
    );
}

export default Searchbar;