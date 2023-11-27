import React from 'react';
import Slides from './slides';
import fig1 from '../../../images/long/figl (34).jpg';
import fig2 from '../../../images/square/fig (41).jpg';
import fig3 from '../../../images/square/fig (44).jpg';
import fig4 from '../../../images/square/fig (51).jpg';
import fig5 from '../../../images/square/fig (13).jpg';
const t1 = "PixelQuest Chronicles - Embark on an Epic Adventure!";
const t2 = "Immerse yourself in the captivating world of PixelQuest Chronicles, a role-playing adventure game set in a virtual realm. Channel your inner hero as you traverse through time and conquer formidable foes. Engage in thrilling quests, harness your strategic prowess, and assemble a team of legendary warriors from various ages to reign supreme.";
const t3 = "The Virtual Empire: Forge your Dynasty!";
const t4 = "Step into The Virtual Empire, a revolutionary strategy game where you have the power to build and expand your own digital realm. Strategize, form alliances, and wage wars for dominance. Craft a legacy by constructing an empire from the ground up, with the fate of a virtual world at your fingertips.";
const t5 = "Neon Nexus: A Cybernetic Odyssey";
const t6 = "Embark on a cybernetic odyssey within the neon-lit realm of Neon Nexus. Traverse through a futuristic metropolis, confront cybernetic adversaries, and unlock the secrets of a digital universe. Shape your destiny as you evolve, enhance your abilities, and become a beacon of light in this electrifying virtual frontier.";
const t7 = "Dreamweaver's Realm: Unveil the Dreamer";
const t8 = "Delve into Dreamweaver's Realm, a mystical and enigmatic virtual world where dreams come to life. Unleash your potential as a Dreamer, navigating through surreal landscapes and confronting imaginative challenges. Discover the depths of your creativity, master the art of manifestation, and forge a path through a realm brimming with endless possibilities.";
const t9 = "Mythical Realms : Rise of Legends- An Epic Fantasy";
const t10 = "Delve into a realm of magic and myth with Mythical Realms: Rise of Legends. Conquer fearsome adversaries, embark on grand quests, and gather and empower legendary creatures from ancient folklore.";
export const Carousel = ({ value, setTranslateValue}) => {
  const divstyle = { 
    transform: `translate(${value}%)`
  };
    return (
      <>
        <div className='car'>
            <div className='matter'>
              <div className="caro" style={divstyle}>
                <Slides txt1={t1} txt2={t2} imgg={fig1} />
                <Slides txt1={t3} txt2={t4} imgg={fig2} />
                <Slides txt1={t5} txt2={t6} imgg={fig3} />
                <Slides txt1={t7} txt2={t8} imgg={fig4} />
                <Slides txt1={t9} txt2={t10} imgg={fig5} />
              </div>
            </div>
        </div>
      </>
    );
}
export default Carousel;