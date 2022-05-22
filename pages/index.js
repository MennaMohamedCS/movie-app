import React from "react";
import { useState, useEffect } from "react";
import CardInfo from "../components/CardInfo";
export default function Home() {
  const [List, setList] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  // fetching All Data from fake API
  useEffect(() => {
    async function fetchingData() {
      const res = await fetch("http://localhost:4000/data");
      const data = await res.json();
      //console.log(data);
      setList(
        data?.filter((item) => {
          return item;
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
    <>
      <div>
        <div>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
            {List?.map((item) => (
              <>
                <CardInfo item={item} key={item.title} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
