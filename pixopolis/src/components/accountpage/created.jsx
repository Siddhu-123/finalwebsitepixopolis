import DropdownMenu from './dropdown';
import NFTSacc from './nfts';
import n1 from '../../images/square/path.jpg';
import n2 from '../../images/square/fig (26).jpg';
import n3 from '../../images/square/fig (23).jpg';
export default function CreatedTab() {
  return (
    <>
      <div className="operationpanel">
        <div className="searchitems">
            <svg width="1.2vw" height="1.2vw" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0703 20.0444C21.9769 18.1313 23.1556 15.4922 23.1556 12.5778C23.1556 6.73583 18.4197 2 12.5778 2C6.73583 2 2 6.73583 2 12.5778C2 18.4197 6.73583 23.1556 12.5778 23.1556C15.5053 23.1556 18.1551 21.9663 20.0703 20.0444ZM20.0703 20.0444L28.5 28.5" stroke="black" stroke-width="3" stroke-linecap="round"/></svg>
            <input type='text' placeholder='Search items'></input>        
        </div>
        <div className="tabdropdown">
          <DropdownMenu />
        </div>
      </div>
      <div className="nftsacc">
        <NFTSacc imgg={n1} name="pathway" nftname="pathway to the mystery land"/>
        <NFTSacc imgg={n2} name="pathway" nftname="pathway to the mystery land"/>
        <NFTSacc imgg={n3} name="pathway" nftname="pathway to the mystery land"/>        
        <NFTSacc imgg={n1} name="pathway" nftname="pathway to the mystery land"/>
        <NFTSacc imgg={n2} name="pathway" nftname="pathway to the mystery land"/>
        <NFTSacc imgg={n3} name="pathway" nftname="pathway to the mystery land"/>
        <NFTSacc imgg={n1} name="pathway" nftname="pathway to the mystery land"/>
        <NFTSacc imgg={n2} name="pathway" nftname="pathway to the mystery land"/>
        <NFTSacc imgg={n3} name="pathway" nftname="pathway to the mystery land"/>        
        <NFTSacc imgg={n1} name="pathway" nftname="pathway to the mystery land"/>
        <NFTSacc imgg={n2} name="pathway" nftname="pathway to the mystery land"/>
        <NFTSacc imgg={n3} name="pathway" nftname="pathway to the mystery land"/>
      </div>
    </>
  );
}