import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { BsLightning, BsFillPersonFill } from "react-icons/bs";
import { IoMdNotificationsOutline, IoIosSettings } from "react-icons/io";
import InputBase from "@mui/material/InputBase";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <CiSearch />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <MdDarkMode /> : <BsLightning />}
        </IconButton>
        <IconButton>
          <IoMdNotificationsOutline />
        </IconButton>
        <IconButton>
          <IoIosSettings />
        </IconButton>
        <IconButton>
          <BsFillPersonFill />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;


