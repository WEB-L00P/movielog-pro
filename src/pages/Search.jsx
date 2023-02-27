import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "../components/Card";

const Search = () => {
  const [Data, setData] = useState([]);
  const [input, setInput] = useState("ullu");
  const inputRef = useRef();

  //   const input = inputRef.current.value;
  function handelClick() {
    setInput(inputRef.current.value);
    console.log(inputRef.current.value);
  }

  const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=091c8f2ad911e417be38a76c2f0d9117&language=en-US&query=${input}&page=1&include_adult=false`;
  useEffect(() => {
    axios.get(baseURL).then((res) => setData(res.data.results));
  }, [input]);
  console.log(Data);

  return (
    <>
      <div className="main bg-[#16213e] py-5 px-20 scroll-smooth">
        <div className="input flex justify-center gap-3">
          <input
            className="w-80 rounded-sm py-2 px-4"
            type="search"
            name="search"
            id="search"
            placeholder="Search a movie"
            ref={inputRef}
          />
          <button
            className="bg-[#e90064] text-[#f5eaea] px-4 rounded-sm text-base font-bold"
            onClick={() => handelClick()}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="movies mt-10">
          <div className="grid grid-cols-[repeat(auto-fit,_16.666666%)] justify-center">
            <div className="col-span-7 justify-center justify-self-center mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-5 2xl:gap-20">
              {Data.map((res) => (
                <Card
                  key={res.key}
                  id={res.id}
                  title={res.original_title}
                  img={res.poster_path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
