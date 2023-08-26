import React from "react";

export const Promotions = () => {
  return (
    <div className="flex flex-col bg-gray-400 min-h-full p-5">
      {/* promotions heading */}
      <div className="flex flex-row bg-red-200 h-10"></div>
      {/* banners */}
      <div className="flex flex-row bg-teal-200 p-5">
        <div className="flex flex-col bg-orange-400  w-full h-5">
          <div className="bg-yellow-200 h-10"></div>
          <div className="bg-blue-400 h-10"></div>
        </div>
        <div className="flex flex-row bg-lime-300 w-full h-5">
          <div className="bg-teal-700 w-full"></div>
          <div className="bg-purple-500 w-full"></div>
        </div>
      </div>
    </div>
  );
};
