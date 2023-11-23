import { styled } from "@mui/system";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { IUser } from "../../type/type";
import { Typography } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const Container = styled("div")({
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

//Card for the static list of centers

const CardPatient = ({
  title,
  userData,
}: {
  title: string;
  userData: IUser;
  content: string;
  isActive: boolean;
}) => {
  return (
    <Container>
      <h4 className="flex justify-between mb-[5px] font-bold">
        {title} <CheckCircleOutlineOutlinedIcon sx={{ color: "#4282ff" }} />
      </h4>
      <h4>{`${userData.firstName} ${userData.lastName}`} </h4>
      <Typography variant="subtitle1">{userData.email}</Typography>
      <div className="flex">
        <div className="w-fit pt-[25px]">
          <FmdGoodOutlinedIcon sx={{ color: "#000" }} />
        </div>
        <div className="flex flex-col">
          <Typography variant="subtitle1">
              {userData.address.location} {userData.address.zipCode}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default CardPatient;
