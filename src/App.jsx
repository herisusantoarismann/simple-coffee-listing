import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "./assets/bg-cafe.jpg";
import Vector from "./assets/vector.svg";
import { Button, CoffeeItem } from "./components";

const App = () => {
  const [datas, setDatas] = useState([]);
  const [coffee, setCoffee] = useState([]);
  const [filterBy, setFilterBy] = useState("all");

  useEffect(() => {
    const getData = async () => {
      const res = await axios(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = res.data;

      setDatas(data);
    };

    getData();
  }, []);

  useEffect(() => {
    const data = datas.filter((item) =>
      filterBy === "all" ? item : item.available
    );

    setCoffee(data);
  }, [filterBy, datas]);

  return (
    <div className="relative min-h-screen min-w-screen flex items-center justify-center bg-[#1B1D1F]">
      <img
        src={Image}
        alt="background"
        className="absolute top-0 left-0 w-full object-cover"
      />

      {/* Container */}
      <div className="relative w-11/12 sm:w-3/4 xl:max-w-screen-lg p-4 sm:p-8 md:p-16 flex flex-col items-center gap-4 bg-[#111315] rounded-lg overflow-hidden z-10">
        <div className="relative lg:w-3/4 xl:w-2/4 text-center">
          <img
            src={Vector}
            alt="vector"
            className="absolute bottom-0 -right-1/4 sm:right-0 -z-10"
          />

          <div className="space-y-4 z-20">
            <h2 className="text-xl md:text-3xl font-semibold text-[#FEF7EE]">
              Our Collection
            </h2>
            <p className="text-sm md:text-base text-[#6F757C]">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            isActive={filterBy === "all"}
            onClick={() => setFilterBy("all")}
          >
            All Products
          </Button>
          <Button
            isActive={filterBy === "available"}
            onClick={() => setFilterBy("available")}
          >
            Available Now
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-x-8 xl:gap-y-16">
          {coffee.map((coffee, index) => {
            return <CoffeeItem data={coffee} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
