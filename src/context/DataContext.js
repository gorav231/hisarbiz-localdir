import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { supabase } from "supabase";
export const DataContextCommon = createContext();

const DataContext = ({ children }) => {
  const [images, setImages] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const [searchVal, setSearchVal] = useState('')
  const CDNURL =
    "https://gfnqrowfqknvdwngbped.supabase.co/storage/v1/object/public/photogelary/";
  const [serchResultData, setSerchResultData] = useState([]);
  const [coords, setCoords] = useState({ lat: null, long: null });
  const [locationName, setLocationName] = useState("");
  const router = useRouter();

  const [currenLetitude, setCurrentLetitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLetitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    try {
      const searchData = async () => {
        const { data, error } = await supabase
          .from("list-business")
          .select("*")
          .filter("businessName", "ilike", `%${searchTerm}%`)
          .filter("businessCategory", "ilike", `%${searchTerm}%`)
          .filter("businessAddress", "ilike", `%${searchByLocation}%`);

        if (data) {
          setSearchData(data);
        } else {
          console.log(error);
        }
      };
      searchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const categoryBy = searchData?.filter((n) =>
    n.businessCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const buisnessNameBy = searchData?.filter((n) =>
    n.businessName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const combainSearchData = categoryBy.concat(buisnessNameBy);


  const filterdData = combainSearchData.filter(
    (f) =>
      f?.businessAddress.toLowerCase() ===
        searchByLocation.toLocaleLowerCase() || searchByLocation === ""
  );

  const businessName = searchData?.map((n) => n.businessName);
  const businessCategory = searchData?.map((n) => n.businessCategory);

  const suggestData = businessName.concat(businessCategory) || [];

  const handelSerch = (e) => {
    if (searchTerm || searchByLocation) {
      router.push(`/search/listing`);
    }
    localStorage.setItem("searchRes", JSON.stringify(filterdData));

    setSearchTerm("");
    setSearchByLocation("");
  };

  const {
    data: getSomeData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getSomeData"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      return res.json();
    },
  });


  const dataInfo = {
    serchResultData,
    setSerchResultData,
    searchTerm,
    setSearchTerm,
    handelSerch,
    filterdData,
    searchData,
    searchByLocation,
    setSearchByLocation,
    suggestData,
    combainSearchData,
    refetch,

    currenLetitude,
    currentLongitude,

    locationName,
    setLocationName,
    searchVal, setSearchVal
  };

  return (
    <DataContextCommon.Provider value={dataInfo}>
      {children}
    </DataContextCommon.Provider>
  );
};

export default DataContext;
