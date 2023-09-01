import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack spacing={0.6}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ color: colors.grey[100] }}
      >
        {title}
      </Typography>
      <Typography variant="h5" sx={{ color: colors.greenAccent[400] }}>
        {subTitle}
      </Typography>
    </Stack>
  );
};

export default Header;