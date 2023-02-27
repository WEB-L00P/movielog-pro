import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const SinglePage = () => {
  const [Data, setData] = useState([]);
  const { id } = useParams();
  const baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=091c8f2ad911e417be38a76c2f0d9117&language=en-US`;

  useEffect(() => {
    axios.get(baseURL).then((res) => setData(res.data));
  }, []);
  console.log(Data);

  const backDrop = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${Data.backdrop_path}`;

  const poster = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${Data.poster_path}`;

  const ratings = Math.round(Data.vote_average);

  const imdb = `https://www.imdb.com/title/${Data.imdb_id}`;
  const Genres = Data.genres;
  const Production = Data.production_companies;

  return (
    <>
      <div
        className="main py-5 px-10 md:px-20 scroll-smooth"
        style={{
          backgroundImage: `linear-gradient(#060047af,#37145fa6),url(${backDrop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full bg-[#0600477c] movie-section p-5 grid grid-cols-1 lg:grid-cols-2 rounded-lg lg:rounded-2xl">
          <div className="image flex justify-center md:h-[50rem]">
            <img
              className="text-[#f5eaea] rounded-lg"
              src={poster}
              alt={Data.title}
            />
          </div>

          <div className="info text-[#f5eaea] text-center mt-5 lg:text-start">
            <h1 className="text-3xl font-bold">{Data.title}</h1>
            <p className="my-3 lg:my-5 xl:w-[40rem] text-gray-400">
              {Data.overview}
            </p>
            <h1 className="ratings lg:my-10 text-2xl font-bold text-yellow-300">
              <i className="text-xl fa-solid fa-star mr-2"></i>
              {ratings}{" "}
              <span className="text-base text-gray-400 font-medium">/10</span>
            </h1>
            <div className="genres mt-5 flex gap-3 justify-center lg:justify-start">
              {Genres?.map((res) => (
                <h1
                  key={res.id}
                  className="bg-gray-600 rounded-md text-base hover:bg-[#e90064] px-3 py-1"
                >
                  {res.name}
                </h1>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-gray-300">
                Production Companies-
              </p>
              <div className="production mt-2 grid grid-cols-1 gap-3  lg:grid-cols-3 lg:gap-2">
                {Production?.map((res) => (
                  <h1 className="text-lg font-bold" key={res.id}>
                    {res.name}
                  </h1>
                ))}
              </div>
            </div>

            <div className="buttons mt-10 grid grid-cols-1">
              <div className="watch-now my-5">
                <Link to={imdb}>
                  <button className="bg-[#e90064] w-60 py-1 lg:w-96 md:py-2 md:px-5 rounded-md hover:bg-gray-600 hover:transition-all hover:duration-500 font-bold text-xl">
                    <span className="ml-2">IMDB</span>
                  </button>
                </Link>
              </div>
              <div className="wishlist">
                <Link to={Data.homepage}>
                  <button className="bg-gray-600 w-60 py-1 lg:w-96 md:py-2 md:px-5 rounded-md hover:bg-[#e90064] hover:transition-all hover:duration-500 font-bold text-xl">
                    <span className="ml-2">Homepage</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
