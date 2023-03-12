import Head from "next/head";
import { Grid, Box, Container } from "@mui/material";

import PlayerInputs from "@/components/PlayerInputs";
import { GameBoard } from "@/components";
import Chat from "@/components/Chat";
import { Scores } from "@/components";

export default function Home() {
  const topItem = {
    height: "60%",
    // border: "1px solid white",
  };

  return (
    <>
      <Head>
        <title>Game Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          backgroundColor: "#151A22",
        }}
      >
        <Container maxWidth="lg" sx={{ display: "flex" }}>
          <Grid container display={"flex"} justifyContent={"space-between"}>
            <Grid item xs={4} sx={topItem}>
              <PlayerInputs />
            </Grid>
            <Grid item xs={7} sx={topItem}>
              <GameBoard />
            </Grid>
            <Grid item xs={6}>
              <Scores />
            </Grid>
            <Grid item xs={5}>
              <Chat />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
