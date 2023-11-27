import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';
import Uploadback from './imageuploader/uploadbackground';
import Uploadprofilepic from './imageuploader/uploadprofilepic';
import AllTab from './All';
import CreatedTab from './created';
import CollectionsTab from './collections';
import FavouriteTab from './favourite';
import ActivelistingTab from './activelisting';
import Footer from '../main/footer';
const Accountpage = () =>{
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('all');
  
    function selectTab(nextTab) {
      startTransition(() => {
        setTab(nextTab);
      });
    }
    const navbar = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.add('transparent');
      }
    });
    return(
        <>
        <div className='accprofile'>
            <div className="profileinfo">
                <div className="profilesection" >
                    <div className="profilebackimage"><Uploadback/></div>
                    <div className="profilepic"><Uploadprofilepic/></div>
                </div>
                <div className="accountinfo">
                    <p className="username">Siddhu crypto</p>
                    <div className="userinfo">
                        <svg width="0.75vw" height="1.5vw" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0L0 7.17073L4 9.73171L8 7.17073L4 0ZM0 8.02439L4 14L8 8.02439L4 10.5854L0 8.02439Z" fill="#5E73FF"/></svg>
                        <p>0x5F238aDF2594Cf2C77eAd786181aEaCcc27C1c42</p>
                        <p className="joined date">Joined September 2023</p>
                    </div>
                </div>
                <div className="tabsandsearch">
                    <div className="acctabs">
                        <TabButton
                            isActive={tab === 'all'}
                            onClick={() => selectTab('all')}
                            >
                            All
                        </TabButton>
                        <TabButton
                            isActive={tab === 'created'}
                            onClick={() => selectTab('created')}
                            >
                            Created
                        </TabButton>
                        <TabButton
                            isActive={tab === 'collections'}
                            onClick={() => selectTab('collections')}
                            >
                            Collections
                        </TabButton>
                        <TabButton
                            isActive={tab === 'favourite'}
                            onClick={() => selectTab('favourite')}
                            >
                            Favourite
                        </TabButton>
                        <TabButton
                            isActive={tab === 'activelisting'}
                            onClick={() => selectTab('activelisting')}
                            >
                            Activelisting
                        </TabButton>
                    </div>
                </div>
            </div>
            {tab === 'all' && <AllTab/>}
            {tab === 'created' && <CreatedTab/>}
            {tab === 'collections' && <CollectionsTab/>}
            {tab === 'favourite' && <FavouriteTab/>}
            {tab === 'activelisting' && <ActivelistingTab/>}
        </div>
        <Footer/>
        </>
    );
}

export default Accountpage;