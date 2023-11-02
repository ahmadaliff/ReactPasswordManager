import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";
import { callAPI } from "../domain/api";

const ModalDeleteAccount = ({ open, handleClose, account, refresh }) => {
  const handleDelAccount = async () => {
    try {
      await callAPI({
        endpoint: `/password/${account?.id}`,
        method: "DELETE",
      });
    } catch (error) {
      alert(error);
    }
    handleClose();
    refresh();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{"Are you sure to delete this account?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Email : {account.email}
          <br />
          Domain : {account.provider}
          <br />
          Cateory : {account.category}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={() => handleDelAccount()} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDeleteAccount;
