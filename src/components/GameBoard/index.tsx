import React from "react";
import { Box, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { Chart } from "../Ui";
const GameBoard = () => {
  return (
    <>
      <Box
        width={"100%"}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        sx={{
          "& .MuiBox-root": {
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            border: "1px solid #3B414D",
            px: 1,
            borderRadius: 1,
            background: "#232A39",
            "& .MuiTypography-root": {
              color: "#ffff",
              mx: 2,
            },
          },
        }}
      >
        <Box width="30%">
          <MilitaryTechIcon fontSize="large" color="success" />
          <Typography>1.115</Typography>
        </Box>
        <Box width="40%">
          <AccountCircleIcon fontSize="large" color="info" />
          <Typography>Wael</Typography>
        </Box>
        <Box width="20%">
          <AvTimerIcon fontSize="large" color="warning" />
          <Typography>21:30</Typography>
        </Box>
      </Box>
      <Box
        width={"100%"}
        sx={{
          borderRadius: "12px",
          background: "#232A39",
          minHeight: "215px",
          border: "1px solid #3B414D",
          mt: 1,
        }}
      >
        <Chart />
      </Box>
    </>
  );
};

export default GameBoard;
