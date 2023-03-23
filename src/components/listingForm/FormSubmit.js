import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/src/Context/UserContext";
import BusinessInfo from "./BusinessInfo";
const FormSubmit = () => {
  const [business, setBusiness] = useState("");
  const [list, setList] = useState("");
  const { user } = useContext(AuthContext);
  const handleCardInfo = async () => {
    await axios
      .post(
        `https://gfnqrowfqknvdwngbped.supabase.co/rest/v1/list-business`,
        {
          businessName: business?.businessName,
          ABN: business?.ABN,
          businessAddress: business?.businessLocation,
          listingPhone:business?.businessContact,
          businessCategory: list?.businessCategory,
          businessSubCategory: list?.subCategory,
          website: list?.website,
          contactEmail: list?.email,
          email: user?.email,
          addOneLatitude:business?.latitude,
          addOneLongitude:business?.longitude
        },
        {
          headers: {
            apiKey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmbnFyb3dmcWtudmR3bmdicGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNjIzMDMsImV4cCI6MTk5MTkzODMwM30.B1nMH85b6ENzM1h8ZiG2qRmYMBB-J9LttgVhZPUY61s`,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmbnFyb3dmcWtudmR3bmdicGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNjIzMDMsImV4cCI6MTk5MTkzODMwM30.B1nMH85b6ENzM1h8ZiG2qRmYMBB-J9LttgVhZPUY61s`,
          },
        }
      )
      .then((res) => {
        console.log("+++ list-business res +++", res);
      })
      .catch((err) => console.log("+++error to create profile+++", err));
    await axios
      .post("api/profileMail", {
        businessName: business?.businessName,
        ABN: business?.ABN,
        businessAddress: business?.businessLocation,
        businessContact:business?.businessContact,
        additionalAdd:business?.optionalAdd,
        addDes:business?.addDes,
        businessCategory: list?.businessCategory,
        businessSubCategory: list?.subCategory,
        additionalCategory: list?.optinalCategory,
        website: list?.website,
        contactEmail: list?.email,
        email: user?.email,
      })
      .then((res) => {
        console.log("+++ res from profile +++", res);
      })
      .catch((err) => {
        console.log("+++ error in send message +++", err);
      });
  };
  useEffect(() => {
    const businessInfo = JSON.parse(localStorage.getItem("business-info"));
    setBusiness(businessInfo);
    const listInfo = JSON.parse(localStorage.getItem("list-info"));
    setList(listInfo);
  }, []);

  return (
    <>
      <BusinessInfo addreq={handleCardInfo}/>
    </>
  );
};
export default FormSubmit;