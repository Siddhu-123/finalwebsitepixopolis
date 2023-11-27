import React from 'react';

export default function TabButton({ children, isActive, onClick }) {
  const buttonClass = isActive ? 'tabbuttons active' : 'tabbuttons';

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}