import React from 'react';
import { IconContext } from 'react-icons';
import { GiMeditation } from 'react-icons/gi';

function BalanceIcon() {
    return (
      <IconContext.Provider value={{ size: '3rem ' }}>
        <>
          <GiMeditation />
        </>
      </IconContext.Provider>
    );
  }
  
  export default BalanceIcon;