import React from 'react';
import { IconContext } from 'react-icons';
import { FaPeopleCarry } from 'react-icons/fa';

function MissionIcon() {
  return (
    <IconContext.Provider value={{ size: '3rem ' }}>
      <>
        <FaPeopleCarry />
      </>
    </IconContext.Provider>
  );
}

export default MissionIcon;
