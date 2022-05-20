import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineMessage } from 'react-icons/ai';

function DialogueIcon() {
    return (
      <IconContext.Provider value={{ size: '3rem ' }}>
        <>
          <AiOutlineMessage />
        </>
      </IconContext.Provider>
    );
  }
  
  export default DialogueIcon;