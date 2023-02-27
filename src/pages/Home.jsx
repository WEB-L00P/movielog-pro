import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [Movie, setMovie] = useState([]);
  const [Tv, setTv] = useState([]);
  const baseURLMovie =
    "https://api.themoviedb.org/3/movie/popular?api_key=091c8f2ad911e417be38a76c2f0d9117&language=en-US&page=1";

  const baseURLTv =
    "https://api.themoviedb.org/3/tv/popular?api_key=091c8f2ad911e417be38a76c2f0d9117&language=en-US&page=1";

  useEffect(() => {
    axios.get(baseURLMovie).then((res) => setMovie(res.data.results));
  }, []);

  useEffect(() => {
    axios.get(baseURLTv).then((res) => setTv(res.data.results));
  }, []);

  return (
    <div className="bg-[#060047] py-5 px-20">
      <div className="header grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="img">
          <img
            className="h-60 mx-auto md:h-[30rem] rounded-md md:rounded-2xl transition-all"
            src="https://images.thedirect.com/media/article_full/thor-new-posters.jpg?imgeng=cmpr_75/"
            alt=""
          />
        </div>
        <div className="text-center my-auto mx-auto text-[#f5eaea] ">
          <h1 className="text-2xl sm:text-4xl 2xl:text-7xl font-bold mb-10 transition-all">
            Enjoy Watching...
          </h1>
          <h1 className="text-3xl font-bold transition-all xl:text-5xl">
            Thor: Love & Thunder
          </h1>
          <h1 className="text-lg font-bold text-yellow-300 mt-2">
            <i className="fa-solid fa-star"></i>
            <span className="text-[#f5eaea] ml-2">6.3/10</span>
          </h1>
          <div className="buttons mt-5 grid md:grid-cols-2 gap-3 md:gap-10">
            <button className="bg-[#e90064] py-2 px-5 rounded-md hover:bg-gray-600 hover:transition-all hover:duration-500">
              <i className="fa-solid fa-play"></i>
              <span className="ml-2">Watch Now</span>
            </button>
            <button className="bg-gray-600 py-2 px-5 rounded-md hover:bg-[#e90064] hover:transition-all hover:duration-500">
              <i className="fa-solid fa-bookmark"></i>
              <span className="ml-2">Wishlist</span>
            </button>
          </div>
        </div>
      </div>

      <div className="movies mt-10">
        <h1 className="text-[#e7f6f2] text-3xl lg:text-4xl font-bold mb-10 text-center">
          Featured Movies
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,_16.666666%)] justify-center">
          <div className="col-span-7 justify-center justify-self-center mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-5 2xl:gap-20">
            {Movie.slice(0, 5).map((movie) => (
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

      <div className="movies mt-14">
        <h1 className="text-[#e7f6f2] text-3xl lg:text-4xl font-bold mb-10 text-center">
          Featured TV Shows
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,_16.666666%)] justify-center">
          <div className="col-span-7 justify-center justify-self-center mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-5 2xl:gap-20">
            {Tv.slice(0, 5).map((tv) => (
              <Card
                key={tv.id}
                id={tv.id}
                title={tv.name}
                img={tv.poster_path}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
