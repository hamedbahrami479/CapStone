import React from 'react';
import { IconContext } from 'react-icons';
import { RiHomeHeartLine } from 'react-icons/ri';

function HomeIcon() {
  return (
    <IconContext.Provider value={{ size: '3rem ' }}>
      <>
        <RiHomeHeartLine />
      </>
    </IconContext.Provider>
  );
}

export default HomeIcon;
