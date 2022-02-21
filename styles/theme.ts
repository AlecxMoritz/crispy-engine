import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8f0ab9',
    },
    secondary: {
      main: '#db5bd1',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
