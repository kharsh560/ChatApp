import React, { useEffect } from "react";

import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  // ERROR:- Because of the code in between line 18-24, the frontend starts and goes to the "/chats" route directly!

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"orange"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        opacity="0.9"
      >
        <Text
          fontSize="3xl"
          fontFamily="Work sans"
          color="black"
          fontWeight="bolder"
          //   textAlign="center"
        >
          FusionTalk
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        bg={"orange"}
        w="100%"
        opacity="0.9"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        p={3}
      >
        <Tabs variant="soft-rounded" colorScheme="orange">
          <TabList mb="1em" display="flex" justifyContent="center">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
