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

      }, []);
return handler;
  
};

export default useControlPopOutside;