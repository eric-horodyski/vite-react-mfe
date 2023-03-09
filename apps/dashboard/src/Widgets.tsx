import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import { loadRemoteModule } from "@softarc/native-federation";

const Widgets: React.FC = () => {
  const TotalCustomers = React.lazy(
    async () => await loadRemoteModule("summary", "./TotalCustomers")
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper
            sx={{
              height: 240,
            }}
          >
            Timeline
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <React.Suspense fallback="<h1>loading...</h1>">
            <TotalCustomers height="240" />
          </React.Suspense>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            Summary
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Widgets;
