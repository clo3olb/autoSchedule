import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

interface HelpDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  text: string;
}

const HelpDialog = ({ open, handleClose, title, text }: HelpDialogProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default HelpDialog;
