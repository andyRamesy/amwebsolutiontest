import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { centerList } from "../../data/centerList";
import { calculateDistance } from "../../utils/calcuateDistance";
import { IUser } from "../../type/type";
import { useSelector } from "react-redux";

const Card = styled("div")({
  backgroundColor: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const CategoryCard = styled("div")({
  backgroundColor: "#ffffff",
  textAlign: "center",
  color: "#4282ff",
  padding: "10px",
  width: "250px",
  borderRadius: "5px",
});

const CategoryWrapper = styled("div")({
  display: "flex",
  gap: "10px",
});

const CenterList = () => {
  const [distances, setDistances] = useState<number[]>([]); //state for the distance value
  const userDetails = useSelector(
    (state: IUser) => state.userReducer.userDetails
  ); // userDetail data from store

  // Calculate distance for each center data
  useEffect(() => {
    const calculateDistances = () => {
      const calculatedDistances: number[] = [];
      for (let i = 0; i < centerList.length; i++) {
        const distance = calculateDistance(
          userDetails.address.lat,
          userDetails.address.lng,
          centerList[i].address.coords.lat,
          centerList[i].address.coords.lng
        );
        calculatedDistances.push(distance);
      }
      setDistances(calculatedDistances);
    };

    //Only calculate when the userDetails exist 
    if (userDetails) {
      calculateDistances();
    }
  }, [userDetails]);

  return (
    <Wrapper>
      {centerList.map((center, index) => (
        <Card>
          <div className="flex justify-between xs:flex-col sm:flex-row">
            <Typography sx={{ marginBottom: "10px" }} variant="h4">
              {center.name}
            </Typography>
            <Button className="h-fit w-fit " variant="outlined">
              Voir sur la carte
            </Button>
          </div>
          <Typography sx={{ marginBottom: "50px" }} variant="subtitle2">
            {center.address.location}, {center.address.zipCode} |{" "}
            {distances[index] !== undefined ? distances[index].toFixed(2) : ""}{" "}
            Km
          </Typography>
          <CategoryWrapper>
            {center.address.type &&
              center.address.type.map((category) => (
                <CategoryCard>{category}</CategoryCard>
              ))}
          </CategoryWrapper>
        </Card>
      ))}
    </Wrapper>
  );
};

export default CenterList;
