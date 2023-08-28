import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import {AiOutlineClose} from "react-icons/ai";

const SavedShows = () => {
    const [movies,setMovies] = useState([]);
    const {user} = UserAuth();


    const slideLeft = ()=>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft-500;
     } 
     const slideRight = ()=>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft+500;
     } 
     useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows);
        });
     },[user?.email])
    const movieRef = doc(db,'users',`${user?.email}`);
    const deleteShow = async(passedID)=>{
      try {
         const results = movies.filter((item)=> item.id !== passedID)
         await updateDoc(movieRef,{
          savedShows: results
         })
      } catch (error) {
        console.log(error);
      }
    }

    return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((item, id) => {
            return (
              <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                  className="w-full h-auto block"
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100">
                  <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.title}
                  </p>
                  <p className="absolute text-gray-300 top-4 right-4" onClick={()=>{
                    deleteShow(item.id);
                  }}>
                     <AiOutlineClose/>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default SavedShows;
