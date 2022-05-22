import React from "react";
import { useState, useEffect } from "react";
import CardInfo from "../components/CardInfo";
const moves = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    //fetching movies Data from fake API
    async function fetchingData() {
      const res = await fetch("http://localhost:4000/data");
      const data = await res.json();
      //console.log(data);
      setMoviesList(
        data?.filter((item) => {
          return item.category.toLowerCase() === "movie";
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
      <h1 className="text-white font-bold text-5xl p-5"> Movies </h1>
      <div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
          {moviesList?.map((item) => (
            <>
              <CardInfo item={item} key={item.id} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default moves;
