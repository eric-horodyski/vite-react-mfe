import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, CssBaseline } from "@mui/material";

import TotalCustomers from "./TotalCustomers";

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
      <CssBaseline />
      <Box component="main" sx={mainSx}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <TotalCustomers height={240} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
