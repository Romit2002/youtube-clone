// import React from 'react'

import { useContext } from "react";
import { useState } from "react"
import { Context } from "../context/contextApi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataFromApi } from "../utills/api";
import { Fragment } from "react";
import LeftNav from './LeftNav';
import SearchResultsVideoCard from "./SearchResultsVideoCard";

const SearchResult = () => {

  const [result, setResult] = useState();
  const {setLoading} = useContext(Context);
  const {query} = useParams();

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  },[query])

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then((res)=>{
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    })
  }

  return (
    <Fragment>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 gap-2 p-5">
            {result?.map((item)=>{
              if(item?.type!=="video")return false;
              let video=item?.video;
              return(
                <SearchResultsVideoCard key={video?.videoId} video={video} />
              )
            })}
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default SearchResult
