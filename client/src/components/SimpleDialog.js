import React,{useState}from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

 const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
    width: '40px',
    height: '40px'
  },
  icon: {
    margin: 'auto',
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [file, setfile] = useState(null)
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleinput = (e) => {
     console.log(e.target.files[0]);
     props.onUpload(e.target.files[0])
 
    };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <List>
        <ListItem      >
          <ListItemAvatar>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={handleinput}
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span">
                <CameraAltIcon />
              </Button>
            </label>
          </ListItemAvatar>
          <ListItemText primary="" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
   const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
   };

  return (
    <div>
      <AddIcon onClick={handleClickOpen} />
      <SimpleDialog onUpload={props.onUpload}  open={open} onClose={handleClose} />
    </div>
  );
}