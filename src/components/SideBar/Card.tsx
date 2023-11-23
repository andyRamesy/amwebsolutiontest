import { styled } from "@mui/system";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";


//Card component for the side bar card
const Card = ({
  title,
  content,
  isActive,
}: {
  title: string;
  content: string;
  isActive: boolean;
}) => {

  const Container = styled("div")({
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    borderLeft: `${!isActive ? "1px solid #4282ff" : ""}`,
    width: "300px",
  });
  return (
    <Container>
      <h4
        className={`flex justify-between mb-[5px] font-bold ${
          !isActive ? "text-[#4282ff]" : ""
        }`} /**Conditional rendering for the active card */
      >
        {title} <CheckCircleOutlineOutlinedIcon color="disabled" />
      </h4>
      {/* Conditional rendering for the active card */}
      <div className={` ${!isActive ? "text-[#4282ff]" : ""}`}>{content}</div>
    </Container>
  );
};

export default Card;
