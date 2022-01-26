import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({sendData}) {
  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = React.useState(undefined);
  const [description, setDescription] = React.useState(undefined);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    sendData(title, description)
    setTitle(undefined);
    setDescription(undefined);
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen} style={{
        fontSize: "30px",
        borderRadius:"50%", 
        background: "#1976d2", 
        width: "50px", 
        height: "50px", 
        color: "white", 
        textAlign: "center", 
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}>
        +
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new note, please enter the data here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {setTitle(e.target.value)}}
          />
          <TextField
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            multiline
            variant="standard"
            onChange={(e) => {setDescription(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}