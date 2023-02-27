import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const image = `https://www.themoviedb.org/t/p/w220_and_h330_face${props.img}`;
  return (
    <>
      <div className="overflow-hidden bg-gray-700 cursor-pointer rounded-xl relative group h-96 w-72">
        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold">{props.title}</div>

              <div className="opacity-100 text-sm ">
                <button
                  className="bg-[#e90064] py-2 px-5 rounded-md hover:bg-gray-600 hover:transition-all hover:duration-500 w-fit"
                  onClick={() => {
                    navigate(`${props.id}`);
                  }}
                >
                  <i className="fa-solid fa-eye"></i>
                  <span className="ml-2">View</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out h-full"
          src={image}
        />
      </div>
    </>
  );
};

export default Card;
