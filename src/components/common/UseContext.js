import React, { createContext, useState } from "react";
/**
 * File: src/components/common/UseContext.js
 * Description: reusable component.
 * Data: 4/02/2023
 * Author: Renu Singroha
 */
export const Data = createContext();

const UseContext = (props) => {
  // form1 data of forms at get-quotes
  const [formdata, setFormdata] = useState(0);
  const [home1, setHome1] = useState(null);
  const [planning1, setPlanning1] = useState(null);
  const [weeks1, setWeeks1] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // form2 data of forms at get-quotes
  const [formdata2, setFormdata2] = useState(0);
  const [location, setLocation] = useState("");
  const [building, setBuilding] = useState(null);
  const [work, setWork] = useState(null);
  const [garage, setGarage] = useState(null);
  const [garageSize, setGarageSize] = useState(null);
  const [storey, setStorey] = useState(null);
  const [need, setNeed] = useState(null);
  const [budget, setBudget] = useState(null);
  const [name2, setName2] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone2, setPhone2] = useState("");
  return (
    <Data.Provider
      value={{
        formdata,
        setFormdata,
        home1,
        setHome1,
        planning1,
        setPlanning1,
        weeks1,
        setWeeks1,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        location,
        setLocation,
        formdata2,
        setFormdata2,
        building,
        setBuilding,
        work,
        setWork,
        garage,
        setGarage,
        garageSize,
        setGarageSize,
        storey,
        setStorey,
        need,
        setNeed,
        budget,
        setBudget,
        name2,
        setName2,
        email2,
        setEmail2,
        phone2,
        setPhone2,
      }}
    >
      {props.children}
    </Data.Provider>
  );
};

export default UseContext;
