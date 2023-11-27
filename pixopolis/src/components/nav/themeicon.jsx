import React, { useState } from 'react';

export const SwapDivsOnClick = () => {
  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState(0);

  const handleDivClick = () => {
    setCount(prev => !prev);
    if (theme === 1) {
      import('../../App.css').then(() => {
        setTheme(0);
      });
    } else {
      import('../../App1.css').then(() => {
        setTheme(1);
      });
    }
  };
  return (
    <>
      <div className={`Themeicon ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} onClick={() => handleDivClick()}>
        {count ? (
          <div>
            <svg width="5vw" height="2.5vw" viewBox="0 0 92 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_310_671)">
                <rect width="92" height="50" rx="25" fill="#232323"/>
                <path d="M13 25C13 8.43146 26.4315 -5 43 -5H62C78.5685 -5 92 8.43146 92 25C92 41.5685 78.5685 55 62 55H43C26.4315 55 13 41.5685 13 25Z" fill="#C1C1C1" fill-opacity="0.05"/>
                <path d="M24 25C24 8.43146 37.4315 -5 54 -5H62C78.5685 -5 92 8.43146 92 25C92 41.5685 78.5685 55 62 55H54C37.4315 55 24 41.5685 24 25Z" fill="#C1C1C1" fill-opacity="0.15"/>
                <path d="M34 24C34 7.98374 46.9837 -5 63 -5C79.0163 -5 92 7.98374 92 24V26C92 42.0163 79.0163 55 63 55C46.9837 55 34 42.0163 34 26V24Z" fill="#C1C1C1" fill-opacity="0.25"/>
                <g filter="url(#filter0_i_310_671)">
                <rect x="45" y="3" width="44" height="44" rx="22" fill="#C1C1C1"/>
                </g>
                <g filter="url(#filter1_i_310_671)">
                <path d="M73 13C73 15.7614 70.7614 18 68 18C65.2386 18 63 15.7614 63 13C63 10.2386 65.2386 8 68 8C70.7614 8 73 10.2386 73 13Z" fill="#5A5A5A"/>
                <path d="M70 29C70 33.4183 66.4183 37 62 37C57.5817 37 54 33.4183 54 29C54 24.5817 57.5817 21 62 21C66.4183 21 70 24.5817 70 29Z" fill="#878787"/>
                <path d="M83 24.5C83 25.8807 81.8807 27 80.5 27C79.1193 27 78 25.8807 78 24.5C78 23.1193 79.1193 22 80.5 22C81.8807 22 83 23.1193 83 24.5Z" fill="#858585"/>
                </g>
                <path d="M35 7.90476C33.95 7.90476 33.5002 7.33333 33.5002 6C33.5001 7.33333 33.1249 7.90476 32 7.90476C33.1249 7.90476 33.5001 8.47619 33.5001 10C33.5001 8.47619 33.95 7.90476 35 7.90476Z" fill="#D9D9D9"/>
                <path d="M34 23.9048C32.6 23.9048 32.0002 23.3333 32.0002 22C32.0001 23.3333 31.4999 23.9048 30 23.9048C31.4999 23.9048 32.0001 24.4762 32.0001 26C32.0001 24.4762 32.6 23.9048 34 23.9048Z" fill="#D9D9D9"/>
                <path d="M21 10.8571C19.25 10.8571 18.5003 10 18.5003 8C18.5002 10 17.8749 10.8571 16 10.8571C17.8749 10.8571 18.5002 11.7143 18.5002 14C18.5002 11.7143 19.25 10.8571 21 10.8571Z" fill="#D9D9D9"/>
                <path d="M10 29.8571C8.25 29.8571 7.50027 29 7.50027 27C7.50017 29 6.87489 29.8571 5 29.8571C6.87491 29.8571 7.50018 30.7143 7.50018 33C7.50018 30.7143 8.25 29.8571 10 29.8571Z" fill="#D9D9D9"/>
                <path d="M40 40.8571C38.25 40.8571 37.5003 40 37.5003 38C37.5002 40 36.8749 40.8571 35 40.8571C36.8749 40.8571 37.5002 41.7143 37.5002 44C37.5002 41.7143 38.25 40.8571 40 40.8571Z" fill="#D9D9D9"/>
                <path d="M18 37.381C16.25 37.381 15.5003 36.6667 15.5003 35C15.5002 36.6667 14.8749 37.381 13 37.381C14.8749 37.381 15.5002 38.0952 15.5002 40C15.5002 38.0952 16.25 37.381 18 37.381Z" fill="#D9D9D9"/>
                <path d="M21 27.4286C19.95 27.4286 19.5002 27 19.5002 26C19.5001 27 19.1249 27.4286 18 27.4286C19.1249 27.4286 19.5001 27.8571 19.5001 29C19.5001 27.8571 19.95 27.4286 21 27.4286Z" fill="#D9D9D9"/>
                <path d="M26 41.4286C25.3 41.4286 25.0001 41 25.0001 40C25.0001 41 24.75 41.4286 24 41.4286C24.75 41.4286 25.0001 41.8571 25.0001 43C25.0001 41.8571 25.3 41.4286 26 41.4286Z" fill="#D9D9D9"/>
                <path d="M13 19.4286C11.95 19.4286 11.5002 19 11.5002 18C11.5001 19 11.1249 19.4286 10 19.4286C11.1249 19.4286 11.5001 19.8571 11.5001 21C11.5001 19.8571 11.95 19.4286 13 19.4286Z" fill="#D9D9D9"/>
                </g>
                <rect x="0.5" y="0.5" width="91" height="49" rx="24.5" stroke="none"/>
                <defs>
                <filter id="filter0_i_310_671" x="45" y="3" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="2" dy="2"/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_310_671"/>
                </filter>
                <filter id="filter1_i_310_671" x="54" y="8" width="30" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="1" dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_310_671"/>
                </filter>
                <clipPath id="clip0_310_671">
                <rect width="92" height="50" rx="25" fill="white"/>
                </clipPath>
                </defs>
                </svg>
          </div>
        ) : (
          <div>
            <svg width="5vw" height="2.5vw" viewBox="0 0 92 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_310_724)">
                <rect width="92" height="50" rx="25" fill="#1F98DC"/>
                <path d="M0 25C0 8.43146 13.4315 -5 30 -5H49C65.5685 -5 79 8.43146 79 25C79 41.5685 65.5685 55 49 55H30C13.4315 55 0 41.5685 0 25Z" fill="#3AA9E8"/>
                <path d="M0 25C0 8.43146 13.4315 -5 30 -5H38C54.5685 -5 68 8.43146 68 25C68 41.5685 54.5685 55 38 55H30C13.4315 55 0 41.5685 0 25Z" fill="white" fill-opacity="0.15"/>
                <path d="M0 24C0 7.98374 12.9837 -5 29 -5C45.0163 -5 58 7.98374 58 24V26C58 42.0163 45.0163 55 29 55C12.9837 55 0 42.0163 0 26V24Z" fill="white" fill-opacity="0.25"/>
                <g filter="url(#filter0_i_310_724)">
                <rect x="3" y="3" width="44" height="44" rx="22" fill="#FED500"/>
                </g>
                <path d="M78 7.90476C76.95 7.90476 76.5002 7.33333 76.5002 6C76.5001 7.33333 76.1249 7.90476 75 7.90476C76.1249 7.90476 76.5001 8.47619 76.5001 10C76.5001 8.47619 76.95 7.90476 78 7.90476Z" fill="#D9D9D9"/>
                <path d="M77 23.9048C75.6 23.9048 75.0002 23.3333 75.0002 22C75.0001 23.3333 74.4999 23.9048 73 23.9048C74.4999 23.9048 75.0001 24.4762 75.0001 26C75.0001 24.4762 75.6 23.9048 77 23.9048Z" fill="#D9D9D9"/>
                <path d="M64 10.8571C62.25 10.8571 61.5003 10 61.5003 8C61.5002 10 60.8749 10.8571 59 10.8571C60.8749 10.8571 61.5002 11.7143 61.5002 14C61.5002 11.7143 62.25 10.8571 64 10.8571Z" fill="#D9D9D9"/>
                <path d="M53 29.8571C51.25 29.8571 50.5003 29 50.5003 27C50.5002 29 49.8749 29.8571 48 29.8571C49.8749 29.8571 50.5002 30.7143 50.5002 33C50.5002 30.7143 51.25 29.8571 53 29.8571Z" fill="#D9D9D9"/>
                <path d="M83 40.8571C81.25 40.8571 80.5003 40 80.5003 38C80.5002 40 79.8749 40.8571 78 40.8571C79.8749 40.8571 80.5002 41.7143 80.5002 44C80.5002 41.7143 81.25 40.8571 83 40.8571Z" fill="#D9D9D9"/>
                <path d="M61 37.381C59.25 37.381 58.5003 36.6667 58.5003 35C58.5002 36.6667 57.8749 37.381 56 37.381C57.8749 37.381 58.5002 38.0952 58.5002 40C58.5002 38.0952 59.25 37.381 61 37.381Z" fill="#D9D9D9"/>
                <path d="M64 27.4286C62.95 27.4286 62.5002 27 62.5002 26C62.5001 27 62.1249 27.4286 61 27.4286C62.1249 27.4286 62.5001 27.8571 62.5001 29C62.5001 27.8571 62.95 27.4286 64 27.4286Z" fill="#D9D9D9"/>
                <path d="M69 41.4286C68.3 41.4286 68.0001 41 68.0001 40C68.0001 41 67.75 41.4286 67 41.4286C67.75 41.4286 68.0001 41.8571 68.0001 43C68.0001 41.8571 68.3 41.4286 69 41.4286Z" fill="#D9D9D9"/>
                <path d="M56 19.4286C54.95 19.4286 54.5002 19 54.5002 18C54.5001 19 54.1249 19.4286 53 19.4286C54.1249 19.4286 54.5001 19.8571 54.5001 21C54.5001 19.8571 54.95 19.4286 56 19.4286Z" fill="#D9D9D9"/>
                </g>
                <rect x="0.5" y="0.5" width="91" height="49" rx="24.5" stroke="none"/>
                <defs>
                <filter id="filter0_i_310_724" x="3" y="3" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="2" dy="2"/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_310_724"/>
                </filter>
                <clipPath id="clip0_310_724">
                <rect width="92" height="50" rx="25" fill="white"/>
                </clipPath>
                </defs>
                </svg>
          </div>
        )}
      </div>
      </>
  );
};
export default SwapDivsOnClick;

