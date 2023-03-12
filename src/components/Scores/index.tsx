import { BarChartSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Table } from "../Ui";
// import { useAppSelector } from "../../rtk/store";
function MainScreen() {
  // const { players } = useAppSelector((state) => state.socket);

  const players: Array<any> = [
    {
      id: 1,
      name: "cpu 1",
      score: "735",
    },
    {
      id: 2,
      name: "You",
      score: "215",
    },
    {
      id: 3,
      name: "cpu 3",
      score: "618",
    },
    {
      id: 4,
      name: "cpu 4",
      score: "150",
    },
    {
      id: 5,
      name: "cpu 5",
      score: "0",
    },
  ];
  const columns = ["No.", "Name", "Score"];
  return (
    <Box
      width={"100%"}
      sx={{
        borderRadius: "10px",
        backgroundColor: "#151A22",
        border: "1px solid #3B414D",
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
        <BarChartSharp
          fontSize="small"
          style={{ color: "#F0566B", marginRight: "5px" }}
        />
        Ranking
      </Typography>
      <Table rows={players} columns={columns} />
    </Box>
  );
}

export default MainScreen;
