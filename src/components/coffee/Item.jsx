import React from "react";

import Star from "../../assets/Star.svg";
import StarFill from "../../assets/Star_fill.svg";

const Item = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="relative rounded-lg">
        <img src={data.image} alt={data.name} className="rounded-xl" />
        {data.popular ? (
          <span className="absolute top-2 left-2 rounded-xl bg-[#F6C768] text-xs px-3 py-1.5">
            Pupular
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center justify-between gap-4">
        <h4 className="font-semibold text-[#FEF7EE]">{data.name}</h4>
        <span className="p-1 px-2 bg-[#BEE3CC] rounded-md text-xs">
          {data.price}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <img src={`${data.rating ? StarFill : Star}`} alt="rating" />
          {data.rating ? (
            <div className="flex items-center gap-1">
              <span className="font-semibold text-[#FEF7EE]">
                {Number(data.rating).toFixed(1)}
              </span>
              <span className="text-sm text-[#6F757C] font-semibold">
                ({data.votes} votes)
              </span>
            </div>
          ) : (
            <span className="text-sm text-[#6F757C] font-semibold">
              No Ratings
            </span>
          )}
        </div>
        {data.available ? (
          ""
        ) : (
          <span className="text-sm text-[#ED735D] font-semibold">Sold out</span>
        )}
      </div>
    </div>
  );
};

export default Item;
