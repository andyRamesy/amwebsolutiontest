import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { existingUser } from "../../data/existingUser";
import { useEffect, useState } from "react";
import { IUser } from "../../type/type";
import { getActions } from "../../store/actions/userActions";
import { connect } from "react-redux";

const BtnValidate = styled(Button)({
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

const ListPatient = ({ addUser }: any) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [hasChoosed, setHasChoosed] = useState<boolean>(false);

  // Effect to update 'hasChoosed' based on 'user' state changes
  useEffect(() => {
    setHasChoosed(user !== null); //check if user is null or not and then return a boolean
  }, [user]);

  // Handler for Select component change event
  const handleSelect = (event: SelectChangeEvent) => {
    setUser(event.target.value as any);
  };

  // Handler for validating and continuing
  const handleValidate = () => {
    addUser(user); // Dispatching addUser action with selected user
    console.log("User state updated:", user);
  };

  return (
    <form>
      <div className="flex flex-col gap-[15px]">
        <label>Patient existant</label>
        <Select
          className="w-[250px]"
          onChange={handleSelect}
          value={user as any}
        >
          {existingUser.map((user) => (
            <MenuItem key={user.id} value={user as any}>
              {user.firstName}
            </MenuItem>
          ))}
        </Select>
        <BtnValidate
          disabled={!hasChoosed}
          variant="contained"
          onClick={handleValidate}
        >
          Valider et continuer
        </BtnValidate>
        <hr />
      </div>
    </form>
  );
};

const mapActionsToProps = (dispatch: any) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(ListPatient);
