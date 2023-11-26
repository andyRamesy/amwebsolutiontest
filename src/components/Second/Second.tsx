import React from "react";
import CenterList from "./CenterList";
import Map from "../Map/Map";

const Second = () => {
  return (
    <div className="flex flex-col gap-[5px]">
      <CenterList />
      <Map />
    </div>
  );
};

export default Second;
