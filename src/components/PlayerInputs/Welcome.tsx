import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";

type IWelcome = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<any>>;
};

const Welcome = ({ name, setName }: IWelcome) => {
  const [value, setValue] = useState<string>("");

  const centerStyles = {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  };

  const acceptBackground = value
    ? "linear-gradient(0.25turn, #E74287, #FC6950)"
    : "#8690A4";

  return (
    <Box
      sx={{
        display: "flex",
        height: "95%",
        width: "70%",
        alignSelf: "center",
        border: "1px solid #3B414D",
        borderRadius: "5px",
        backgroundColor: "#232A39",
      }}
    >
      <Box
        sx={{
          ...centerStyles,
          flexDirection: "column",
        }}
      >
        <Box sx={{ ...centerStyles, height: "35%" }}>
          <Typography fontSize={22} color={"#A9B0BF"}>
            Welcome
          </Typography>
        </Box>
        <Box
          sx={{
            ...centerStyles,
            flexDirection: "column",
            justifyContent: "space-around",
            height: "35%",
          }}
        >
          <Typography fontSize={8} color={"#A9B0BF"}>
            Please Insert Your Name
          </Typography>
          <TextField
            id="name"
            variant="outlined"
            size="small"
            sx={{
              background: "#151A22",
              width: "80%",
              borderRadius: "4px",
              border: "1px solid #3B414D",
              input: { color: "#fff" },
            }}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue(event.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              setName(value);
            }}
            sx={{
              background: acceptBackground,
              width: "80%",
              borderRadius: "4px",
              color: "#fff",
            }}
          >
            Accept
          </Button>
        </Box>
        <Box sx={{ height: "30%" }} />
      </Box>
    </Box>
  );
};

Welcome.propTypes = {};

export default Welcome;
