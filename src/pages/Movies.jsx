import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Movies = () => {
  const [Movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(1);
  const baseURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=091c8f2ad911e417be38a76c2f0d9117&language=en-US&page=${loader}`;

  useEffect(() => {
    axios.get(baseURL).then((res) => setMovies(res.data.results));
  }, [loader]);
  return (
    <>
      <div id="top" className="main bg-[#060047] py-5 px-20 scroll-smooth">
        <header className="text-center">
          <h1 className="text-[#f5eaea] text-4xl font-bold">Movies Section</h1>
        </header>
        <div className="movies mt-10">
          <div className="grid grid-cols-[repeat(auto-fit,_16.666666%)] justify-center">
            <div className="col-span-7 justify-center justify-self-center mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-5 2xl:gap-20">
              {Movies.map((movie) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  img={movie.poster_path}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="btn mt-5 flex justify-center gap-5">
          {loader === 1 ? (
            <button className="bg-[#e90064] text-[#f5eaea] py-1 px-4 rounded-lg text-xl font-bold cursor-not-allowed">
              <a href="#top" className="cursor-not-allowed">
                <i className="cursor-not-allowed fa-solid fa-backward"></i>
              </a>
            </button>
          ) : (
            <button
              className="bg-[#e90064] text-[#f5eaea] py-1 px-4 rounded-lg text-xl font-bold"
              onClick={() => setLoader(loader - 1)}
            >
              <a href="#top">
                <i className="fa-solid fa-backward"></i>
              </a>
            </button>
          )}
          <p className="text-[#f5eaea] text-3xl font-bold">{loader}</p>
          <button
            className="bg-[#e90064] text-[#f5eaea] py-1 px-4 rounded-lg text-xl font-bold"
            onClick={() => setLoader(loader + 1)}
          >
            <a href="#top">
              <i className="fa-solid fa-forward"></i>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Movies;
