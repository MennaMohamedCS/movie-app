import React from "react";
import { useState, useEffect } from "react";
import CardInfo from "../components/CardInfo";
const series = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    //fetching series Data from fake API
    async function fetchingData() {
      const res = await fetch("http://localhost:4000/data");
      const data = await res.json();
      setSeriesList(
        data?.filter((item) => {
          return item.category.toLowerCase() === "tv series";
        })
      );
      setIsloading(false);
    }
    fetchingData();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-white font-bold text-5xl p-5"> Series </h1>
      <div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
          {seriesList?.map((item) => (
            <>
              <CardInfo item={item} key={item.title} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default series;
