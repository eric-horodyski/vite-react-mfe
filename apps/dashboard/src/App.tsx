import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import Widgets from "./Widgets";

const mdTheme = createTheme();
const mainSx = {
  backgroundColor: mdTheme.palette.grey[100],
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              My Business
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={mainSx}>
          <Toolbar />
          <Widgets />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
