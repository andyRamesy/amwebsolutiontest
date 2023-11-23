import TextInput from "../TextInput/TextInput";
// import Places from "../PlaceAddress/PlaceAddress";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { validateNewPatienForm } from "../../utils/utils";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import PlaceAddress from "../PlaceAddress/PlaceAddress";
import { getActions } from "../../store/actions/userActions";
import { connect } from "react-redux";
import CustomDialog from "../Dialog/Dialog";
import emailjs from "@emailjs/browser";

const BtnValidate = styled(Button)({
  display: "flex",
  // marginTop: "10px",
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

const NewPatientForm = ({ addUser }: any) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phon, setPhon] = useState();
  const [address, setAddress] = useState<any>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [zipCode, setZipCode] = useState("");
  const [openDialog, setOpenDialog] = useState<boolean>(false); //state for the validation dialog

  useEffect(() => {
    //check all form input with the utils validateNewPatienForm function
    setIsFormValid(
      validateNewPatienForm({ firstName, lastName, email, phon, address })
    );
  }, [firstName, lastName, email, phon, address]);

  const handleDataAddress = (data: object) => {
    setAddress(data);
    console.log("datadata:", setAddress);
  };

  const handleSubmit = () => {
    //the object to send to addUser function
    const patientData = {
      firstName,
      lastName,
      email,
      phon,
      address: {
        location: address.results[0].formatted_address,
        lat: address.lat,
        lng: address.lng,
        zipCode,
      },
    };
    addUser(patientData); //action dispatched from the store
    //send email to from_email value with patientData as content
    emailjs
      .send(
        "service_y8zh6xx",
        "template_zuua04a",
        {
          from_name: "amwebsolutiontest",
          to_name: "Andy Ramesy",
          from_email: "amwebsolutiontest@test.com", //sender
          message: JSON.stringify(patientData), //userDetails as message content
        },
        "RgIZTG5bdVIMPLmJO"
      )
      .then(() => {
        alert("Veuillez verifier votre boite email"); //show if email succeed
      })
      .catch((error) => {
        alert(error);
      });
    console.log("patient data:", patientData);
  };

  return (
    <form>
      <div className="flex flex-col gap-[15px] mt-[20px]">
        <label>Nouveau patient</label>
        <TextInput
          handleInput={(e) => setFirstName(e.target.value)}
          label="Nom"
          type="text"
        />
        <TextInput
          handleInput={(e) => setLastName(e.target.value)}
          label="Prénom"
          type="text"
        />
        <TextInput
          handleInput={(e) => setEmail(e.target.value)}
          label="Email"
          type="email"
        />
        <TextInput
          handleInput={(e) => setPhon(e.target.value)}
          label="N° Téléphone"
          type="text"
        />
        <div className="flex gap-[10px] mt-[20px] md:flex-row xs:flex-col">
          <TextField
            required
            onChange={() =>  {}}
            placeholder="Code postal"
            type="text"
            InputProps={{ sx: { borderRadius: 2, width: "150px" } }}
          />
          <PlaceAddress setDataAddress={handleDataAddress} />
        </div>
        <BtnValidate
          disabled={!isFormValid}
          variant="contained"
          onClick={() => setOpenDialog(true)}
        >
          Valider et continuer
        </BtnValidate>
      </div>
      <CustomDialog
        isOpen={openDialog}
        handleClose={() => setOpenDialog(false)}
        handleValidate={handleSubmit}
        title={"Confirmer l'enregistrement d'un nouveau patient ?"}
        content={
          "Les informations du patient vous seront envoyer par email si vous valider."
        }
      />
    </form>
  );
};

const mapActionsToProps = (dispatch: any) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(NewPatientForm);
