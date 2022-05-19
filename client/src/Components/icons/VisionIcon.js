import React from 'react';
import { IconContext } from 'react-icons';
import { HiGlobeAlt } from 'react-icons/hi'

function VisionIcon() {
  return (
    <IconContext.Provider value={{ size: '3rem ' }}>
      <>
        <HiGlobeAlt />
      </>
    </IconContext.Provider>
  );
}

export default VisionIcon;