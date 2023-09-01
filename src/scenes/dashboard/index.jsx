import React from "react";
import Header from "../../components/common/Header";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Header title="DASHBOARD" subTitle="Welcome to your Dashboard" />
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        
      </Grid>
    </>
  );
};

export default Dashboard;
