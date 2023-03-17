import React, { useEffect } from 'react';

const useControlPopOutside = (setRpop, popupRef) => {
    let handler = (e) => {
        if (!popupRef.current?.contains(e.target)) {
          setRpop(false);
        }
        
      };
    useEffect(() => {
        document.addEventListener("mousedown", handler);
        return () => {
          document.removeEventListener("mousedown", handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
return handler;
  
};

export default useControlPopOutside;