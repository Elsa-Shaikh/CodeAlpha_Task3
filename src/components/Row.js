import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

function Row({ title, fetchURL, rowId }) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [fetchURL]);
//   console.log(movies);
 const slideLeft = ()=>{
    let slider = document.getElementById('slider'+ rowId);
    slider.scrollLeft = slider.scrollLeft-500;
 } 
 const slideRight = ()=>{
    let slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft+500;
 } 


return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        <div id={"slider"+rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => {
            return (
              <Movie item={item} key={id}/>
            );
          })}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
      </div>
    </>
  );
}

export default Row;
