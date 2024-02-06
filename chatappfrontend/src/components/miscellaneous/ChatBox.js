import { Box } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";
// import "./styles.css";
import SingleChat from "../SingleChat";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      opacity="0.9"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="3px"
      borderColor="orange"
      //   zIndex="0" {Its not solving the issue!}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
