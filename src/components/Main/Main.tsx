import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import ListPatient from "./ListPatient";
import NewPatientForm from "./NewPatientForm";
import { useSelector } from "react-redux";
import { IUser } from "../../type/type";
import { useEffect } from "react";
import Second from "../Second/Second";

const Container = styled("div")({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  flex: "1 1 auto",
  width: "calc(60vw - 10px)",
});

const Main = () => {
  const userDetails = useSelector(
    (state: IUser) => state.userReducer.userDetails
  );

  useEffect(() => {
    console.log("userDetails", userDetails);
  }, [userDetails]);

  return (
    <Container>
      {/* Conditional rendering based on whether userDetails is null */}
      {userDetails === null ? (
        <div>
          <Typography sx={{ marginBottom: "50px" }} variant="h4">
            Renseignez les données de votre patient
          </Typography>
          <ListPatient />
          <NewPatientForm />
        </div>
      ) : (
        // If userDetails is not null, render selection of center APA for the patient
        <>
          <Typography sx={{ marginBottom: "10px" }} variant="h4">
            Choisissez votre centre APA pour votre patient
          </Typography>
          <Typography
            sx={{
              marginBottom: "50px",
              color: "#808080",
              fontSize: "15px",
              fontWeight: "bold",
            }}
            variant="subtitle2"
          >
            9 CENTRE APA À PROXIMITÉ
          </Typography>
          <Second />
        </>
      )}
    </Container>
  );
};

export default Main;
