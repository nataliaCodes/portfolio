import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './Button.scss';

const ThemedButton = withStyles((theme) => ({
  root: {
    color: '#DB4355',
    fontSize: '.9em',
    fontFamily: 'Quicksand',
    padding: '0 .4em 0 .4em',
    fontWeight: '700',
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
      style={props.noColor ? {color: "#2A2A28"} : {color: "#DB4355"}}
    >
      {props.children}
    </ThemedButton>
  );
}

export default StyledButton;