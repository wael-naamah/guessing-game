import React, { useState } from "react";
import { Box, TextField, IconButton, Typography } from "@mui/material";
import { ArrowDropUpRounded, ArrowDropDownRounded } from "@mui/icons-material";

type ILabledInput = {
  step: number;
  lable: string;
};

const LabledInput = ({ step, lable }: ILabledInput) => {
  const [value, setValue] = useState<number>(0);

  const handleIncrease = () => {
    setValue(value + step);
  };

  const handleDecrease = () => {
    if (value - step > 0) {
      setValue(value - step);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(event.target.value) || 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        border: "1px solid #3B414D",
        margin: "5px",
        borderRadius: "5px",
        backgroundColor: "#232A39",
      }}
    >
      <IconButton onClick={handleDecrease}>
        <ArrowDropDownRounded style={{ color: "white" }} />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography fontSize={8} fontWeight="500" color="white">
          {lable}
        </Typography>
        <TextField
          size="small"
          sx={{
            background: "#151A22",
            width: { sm: 50 },
            "& .MuiInputBase-root": {
              height: 20,
            },
            borderRadius: "4px",
            input: {
              color: "#fff",
              fontSize: 8,
              fontWeight: "400",
              textAlign: "center",
            },
          }}
          value={value}
          onChange={handleChange}
        />
      </Box>
      <IconButton onClick={handleIncrease}>
        <ArrowDropUpRounded style={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

export default LabledInput;
