import { ForumRounded } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
// import { useAppSelector } from "../../rtk/store";
function Chat() {
  // const { chats, newChatJoin } = useAppSelector((state) => state.socket);
  const chats: Array<any> = [
    {
      name: "cpu 1",
      message: "hello",
      color: "red",
    },
    {
      name: "cpu 2",
      message: "hiiiii",
      color: "purple",
    },
  ];
  return (
    <>
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
        <ForumRounded
          fontSize="small"
          style={{ color: "#F0566B", marginRight: "5px" }}
        />
        Chat
      </Typography>
      <Box
        width={"100%"}
        sx={{
          borderRadius: "10px",
          backgroundColor: "#1B222C",
          minHeight: "200px",
          overflowY: "hidden",
          overflowX: "hidden",
          position: "relative",
          pt: 2,
          border: "1px solid #3B414D",
        }}
      >
        {chats.length ? (
          chats.map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={"start"}
              alignItems="center"
              p={1}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  textTransform: "uppercase",
                  color: item.color,
                }}
              >
                {item?.name}:
              </Typography>
              <Typography
                sx={{
                  fontSize: "10px",
                  color: !item.message ? "#FF3EEC" : "#FFFFFF",
                  py: "2px",
                  px: "5px",
                  ml: 1,
                  background: "gray",
                  borderRadius: 1,
                }}
              >
                {item.message}
              </Typography>
            </Box>
          ))
        ) : (
          <></>
        )}
        <Box
          width={"100%"}
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
          sx={{
            background: "#494b4c",
            position: "absolute",
            bottom: 0,
            p: 1,
            height: "55px",
          }}
        >
          <TextField
            sx={{
              background: "#151A22",
              color: "#ffff",
              width: "72%",
              height: "100%",
              "& .MuiInputBase-root": {
                height: "100%",
              },
            }}
          ></TextField>
          <Button
            sx={{
              background: "linear-gradient(0.25turn, #E74287, #FC6950)",
              color: "#ffff",
              py: 1,
              px: 2,
              borderRadius: 3,
              width: "25%",
              height: "100%",
            }}
          >
            Start
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Chat;
