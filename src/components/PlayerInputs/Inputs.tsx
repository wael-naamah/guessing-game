import React from "react";
import { Box, Button, Grid, Slider, Typography } from "@mui/material";
import LabledInput from "./LabledInput";
import { SpeedSharp } from "@mui/icons-material";
import CurrentRoundTable from "./CurrentRoundTable";
import { Table } from "../Ui";

const item15 = {
  height: "15%",
};

const item20 = {
  height: "20%",
};

const item50 = {
  height: "50%",
};

const centerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const PlayerInputs = (_props: any) => {
  const [value, setValue] = React.useState<number | number[]>(3);

  function valuetext(value: number) {
    return `${value}x`;
  }

  const marks = [
    {
      value: 1,
      label: "1x",
    },
    {
      value: 2,
      label: "2x",
    },
    {
      value: 3,
      label: "3x",
    },
    {
      value: 4,
      label: "4x",
    },
    {
      value: 5,
      label: "5x",
    },
  ];

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const players: Array<any> = [
    {
      id: 1,
      name: "100",
      score: "2.15",
    },
    {
      id: 2,
      name: "100",
      score: "7.53",
    },
    {
      id: 3,
      name: "100",
      score: "124",
    },
    {
      id: 4,
      name: "100",
      score: "684",
    },
    {
      id: 5,
      name: "100",
      score: "975",
    },
  ];
  const columns = ["Name", "Point", "Multiplier"];

  return (
    <Box
      sx={{
        display: "flex",
        height: "95%",
        width: "78%",
        alignSelf: "center",
        border: "1px solid #3B414D",
        borderRadius: "5px",
        // backgroundColor: "#232A39",
      }}
    >
      <Grid container>
        <Grid item xs={6} sx={item15}>
          <LabledInput step={1} lable={"Points"} />
        </Grid>
        <Grid item xs={6} sx={item15}>
          <LabledInput step={0.1} lable={"Multiplier"} />
        </Grid>
        <Grid item xs={12} sx={{ ...item15, ...centerStyles }}>
          <Button
            variant="contained"
            onClick={() => {
              // setName(value);
            }}
            sx={{
              background: "linear-gradient(0.25turn, #E74287, #FC6950)",
              width: "95%",
              borderRadius: "4px",
              color: "#fff",
            }}
          >
            Start
          </Button>
        </Grid>
        <Grid item xs={12} sx={item50}>
          <Table rows={players} columns={columns} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            ...item20,
            ...centerStyles,
            flexDirection: "column",
          }}
        >
          <Typography
            color={"white"}
            id="discrete-slider-custom"
            gutterBottom
            sx={{
              alignSelf: "self-start",
              paddingLeft: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SpeedSharp
              fontSize="small"
              style={{ color: "#F0566B", marginRight: "5px" }}
            />
            Speed
          </Typography>
          <Box
            sx={{
              width: "90%",
              borderRadius: "10px",
              ...centerStyles,
            }}
          >
            <Slider
              aria-label="Custom marks slider"
              value={value}
              min={1}
              max={5}
              step={1}
              marks={marks.map((mark) => ({
                ...mark,
                label: (
                  <Box
                    sx={{
                      color: mark.value <= value ? "#F0566B" : "white",
                      fontSize: 8,
                    }}
                  >
                    {mark.label}
                  </Box>
                ),
                style: { color: "blue" },
              }))}
              sx={{
                "& .MuiSlider-markLabelActive": {
                  backgroundColor: "transparent",
                },
                "& .MuiSlider-markLabel": {
                  backgroundColor: "transparent",
                },
                "& .MuiSlider-track": {
                  background: "linear-gradient(0.25turn, #E74287, #FC6950)",
                  border: "none",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#232A39",
                },
                "& .MuiSlider-thumb": {
                  background: "linear-gradient(0.25turn, #E74287, #FC6950)",
                  border: "1px solid white",
                },
              }}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

PlayerInputs.propTypes = {};

export default PlayerInputs;
