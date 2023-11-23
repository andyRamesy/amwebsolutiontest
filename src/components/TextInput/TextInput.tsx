import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomInput = styled(TextField)({
  // outline : "none"
});

const TextInput = ({
  label,
  type,
  handleInput,
}: {
  label: string;
  type: string;
  handleInput: (e:any) => void;
}) => {
  return (
    <TextField
      required
      // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
      onChange={handleInput}
      placeholder={label}
      type={type}
      InputProps={{ sx: { borderRadius: 2, width: "250px" } }}
    />
  );
};

export default TextInput;
