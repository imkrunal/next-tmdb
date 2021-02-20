import { createMuiTheme } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
})

export default theme
