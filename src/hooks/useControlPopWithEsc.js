import React, { useCallback, useEffect } from 'react';



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
           // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [efunc])
return efunc;
  
};

export default UsecontrolPopWithEsc;