import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import {navigation} from "../../utils/navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { tokens } from "../../theme";

const Sidebar = () => {
    const [isCollapsible, setIsCollapsible] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const { pathname } = useLocation();
  
  return (
    <Stack
      sx={{
        background: colors.primary[400],
        minHeight: "100vh",
      }}
    >
        {isCollapsible ? (
        <Stack width={60} my={2}>
          <IconButton
            onClick={() => setIsCollapsible(!isCollapsible)}
            sx={{ mb: 25, "&:hover": { backgroundColor: "transparent" } }}
          >
            <i className="fas fa-bars"></i>
          </IconButton>
          <Stack spacing={2}>
            <IconButton
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                "&:hover": { backgroundColor: "transparent" },
                color: pathname === "/" ? colors.blueAccent[400] : undefined,
              }}
            >
              <i className="fa-sharp fa-solid fa-house " />
            </IconButton>
            {navigation.map((item, index) => (
              <Stack key={index}>
                {item?.subMenu.map((subItems, subIndex) => (
                  <IconButton
                    key={subIndex}
                    onClick={() => navigate(subItems.path)}
                    sx={{
                      cursor: "pointer",
                      color:
                        pathname === subItems.path
                          ? colors.blueAccent[400]
                          : undefined,
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    <i className={subItems.icon} />
                  </IconButton>
                ))}
              </Stack>
            ))}
            
          </Stack>
        </Stack>
      ) : (
        <Stack width="14vw" px={3} my={2}>
          <Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h3">ADMIN</Typography>
              <IconButton
                onClick={() => setIsCollapsible(!isCollapsible)}
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
              >
                <i className="fa-solid fa-bars"></i>
              </IconButton>
            </Stack>
            <Stack alignItems="center" my={5}>
              <img
                 src={`../../assets/titi.png`}
                alt="user"
                style={{
                  marginBottom: "1rem",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h3" fontWeight={700}>
                Titi
              </Typography>
              <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
                VP FANCY ADMIN
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="start"
                onClick={() => navigate("/")}
                sx={{
                  cursor: "pointer",
                  color: pathname === "/" ? colors.blueAccent[400] : undefined,
                }}
              >
                <i className="fa-sharp fa-solid fa-house" />
                <Typography variant="h6">Dashboard</Typography>
              </Stack>
              {navigation.map((item, index) => (
                <>
                  <Typography
                    key={index}
                    variant="h6"
                    sx={{ letterSpacing: "3px", color: colors.grey[200] }}
                  >
                    {item.name}
                  </Typography>
                  {item.subMenu.map((subItems, subIndex) => (
                    <Stack
                      key={subIndex}
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      onClick={() => navigate(subItems.path)}
                      sx={{
                        cursor: "pointer",
                        color:
                          pathname === subItems.path
                            ? colors.blueAccent[400]
                            : undefined,
                      }}
                    >
                      <i className={subItems.icon} />
                      <Typography variant="h6" sx={{ pl: "2px" }}>
                        {subItems.name}
                      </Typography>
                    </Stack>
                  ))}
                </>
              ))}
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default Sidebar;
