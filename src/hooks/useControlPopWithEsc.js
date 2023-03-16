import React, { useCallback, useEffect, useState } from 'react';



const UsecontrolPopWithEsc = (setRpop) => {
    const efunc = useCallback(e => {
        if(e.key === 'Escape'){
            setRpop(false)
        }
      })

      useEffect(()=> {
        document.addEventListener('keydown', efunc);
        return () => {
            document.removeEventListener("keydown", efunc);
          };
      }, [efunc])
return efunc;
  
};

export default UsecontrolPopWithEsc;