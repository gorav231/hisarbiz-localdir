import React, {useEffect } from 'react';



const UsecontrolPopWithEsc = (setRpop) => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setRpop(false);
      }
    };
      useEffect(()=> {
        
        return () => {
          window.addEventListener("keydown", close);
          };
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
return close;
  
};

export default UsecontrolPopWithEsc;