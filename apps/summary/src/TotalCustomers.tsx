import React from "react";
import { Paper, Typography } from "@mui/material";

type Props = { height: number };

const TotalCustomers: React.FC<Props> = ({ height }) => {
  return (
    <Paper sx={{ p: 2, height }}>
      <Typography
        variant="h6"
        component="h2"
        color="primary"
        gutterBottom
        fontWeight="bold"
      >
        Total Customers
      </Typography>
      <Typography
        variant="h1"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
      >
        142
      </Typography>
    </Paper>
  );
};
export default TotalCustomers;
