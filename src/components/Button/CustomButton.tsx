import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Btn = styled(Button)({
  display: "flex",
  marginTop: "20px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "15px",
  borderRadius: "10px",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  color: "#ffff",
  fontWeight: "bold",
  width: "fit-content",
  "&:disabled": {
    backgroundColor: "#abc7ff",
    color: "#ffff",
  },
});

const CustomButton = (textBtn: string) => {
  return (
    <Btn disabled variant="contained">
      {textBtn}
    </Btn>
  );
};

export default CustomButton;
