import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { IUser } from "../../type/type";
import CardPatient from "./CardPatient";

const SideBar = () => {
  //getting the userDetails data from the store
  const userDetails = useSelector(
    (state: IUser) => state.userReducer.userDetails
  );
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!userDetails) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [userDetails]);

  return (
    <div className="w-[25vw] h-full flex flex-col items-center gap-[8px] xs:w-auto">
      {!userDetails ? (
        <>
          <Card
            title="Patient"
            content="Renseignez les coordonnées"
            isActive={!isActive}
          />
          <Card
            title="CENTRE APA"
            content="Choisissez le centre"
            isActive={isActive}
          />
        </>
      ) : (
        <>
          <CardPatient
            userData={userDetails}
            title="COORDONNÉES PATIENT"
            content="Renseignez les coordonnées"
            isActive={isActive}
          />
          <Card
            title="CHOIX DU CENTRE APA"
            content="Choisissez le centre"
            isActive={isActive}
          />
        </>
      )}
    </div>
  );
};

export default SideBar;
