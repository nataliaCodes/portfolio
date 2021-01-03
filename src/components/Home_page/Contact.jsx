import { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import './Contact.scss';

import StyledButton from '../Shared/Button';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #E87D2D',
    backgroundColor: '#F88E2C',
    wordWrap: 'wrap',
    overflow: 'hidden',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: '#F6F8F2',
      },
    },
  },
}))(MenuItem);

function Contact() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (val) => {
    var data = val === "email" ? "natalia.martian@gmail.com" : "514.619.4568";

    return new Promise((resolve, reject) => {
      navigator.clipboard
        .writeText([data])
        .then(() => {
          console.log('copied to clipboard!');
          setClicked(true);
          setTimeout(() => {setClicked(false)}, 3000)
        })
        .catch(err => console.log(err))
    });

  };

  return (
    <div id="contact" className="Contact">
      <h1 className="hide-on-mobile">Natalia Martian</h1>
      <h2>Full-stack developer</h2>
      <p>Montreal, Canada</p>
      <div className="contact-button">
        <StyledButton
          noColor={true}
          onClick={handleClick}
        >Email or Call me
        </StyledButton>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div className="menu-title">Click to copy item:</div>
          <StyledMenuItem
            onClick={() => { handleItemClick("email") }}>
            <ListItemText primary="natalia.martian@gmail.com" />
          </StyledMenuItem>
          <StyledMenuItem onClick={() => { handleItemClick() }}>
            <ListItemText primary="514.619.4568" />
          </StyledMenuItem>
          {clicked && <div className="menu-title">Item copied to clipboard!</div>}
        </StyledMenu>
      </div>
    </div>
  );
}

export default Contact;
