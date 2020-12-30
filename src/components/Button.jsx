import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './Button.scss';

const ThemedButton = withStyles((theme) => ({
  root: {
    // color: '#2A2A28',
    color: 'red',
    fontSize: '.9em',
    fontFamily: 'Alegreya Sans SC',
    '&:hover': {
      backgroundColor: '#CFDBD5',
    },
  },
}))(Button);

function StyledButton(props) {
  return (
    <ThemedButton
      className="Button"
      size="large"
      startIcon={props.icon}
    >
      {props.children}
    </ThemedButton>
  );
}

export default StyledButton;