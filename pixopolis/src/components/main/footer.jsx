import React from "react";
import Icons from './icons';
import Pixo from '../../components/nav/pixo';
import {Link} from 'react-router-dom';
function Footer(){
    return (
    <div className='footer'>
        <div className='text'>
            <div className='titlepixo'><Link to="/"><Pixo /></Link></div>
            <div className='fotmarket'>
                <span>Marketplace</span>
                <p>Dashboard</p>
                <p>Stats</p>
                <p>Drops</p>
                <p>Virtual Land</p>
            </div>
            <div className='fotmarket'>
                <span>My Account</span>
                <p>My collection</p>
                <p>Favorite</p>
                <p>Profile</p>
                <p>Create</p>
                <p>Watchlist</p>
                <p>Settings</p>
                <p>Language</p>
                <p>Theme</p>
            </div>
        </div>
        <div><Icons /></div>
    </div>
    );
}
export default Footer;