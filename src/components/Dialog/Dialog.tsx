import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const CustomDialog = ({
  isOpen,
  handleClose,
  handleValidate,
  title,
  content,
}: {
  isOpen: boolean; // Dialog open/close state
  handleClose: () => void; // Function to handle dialog close
  handleValidate: () => void; // Function to handle dialog validation
  title: string; // Dialog title
  content: string; // Dialog content
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleValidate} autoFocus>
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomDialog;
