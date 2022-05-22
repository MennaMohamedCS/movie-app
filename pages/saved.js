import { useState, useEffect } from "react";
import {getSession,signIn} from 'next-auth/react'
import CardInfo from "../components/CardInfo";
const saved = () => {
  const [savedList, setSavedList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(()=>{
    // to check if logged in
    const securePage = async()=>{
        const session = await getSession()
        if(!session){
            signIn()
        }
        else{
          // to show date if user logged in
          async function fetchingData() {
            const res = await fetch("http://localhost:4000/data");
            const data = await res.json();
            //console.log(data);
            setSavedList(
              data?.filter((item) => {
                return item.isBookmarked === true;
              })
            );
            setIsloading(false);
          }
          fetchingData();
        }
    }
    securePage();
   },[])

  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  return (
    <div>
      <h1 className="text-white font-bold text-5xl p-5"> Saved </h1>
      <div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
          {savedList?.map((item) => (
            <>
              <CardInfo item={item} key={item.id} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default saved;
