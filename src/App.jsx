import { Box, Center, Circle, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import CodingAnimation from "./components/codingAnimation";
function App() {
  return (
    <Box h="100vh" backgroundRepeat="no-repeat" backgroundSize="cover" backgro>
      <Center>
        <Box
          display={{ sm: "flex" }}
          flexDirection={{ sm: "column", md: "row", base: "row" }}
        >
          <Center flexDir="column">
            <Text fontWeight="bold">Site em construção</Text>
            <Text>Em breve mais novidades sobre meu portifolio</Text>
          </Center>
          <CodingAnimation />
        </Box>
      </Center>
      <Box position="absolute" bottom="0" w="full" mb={1}>
        <Center gap={5}>
          <p>
            Desenvolvido por
            <strong> Ismael Elias</strong> | &#9889;
          </p>
          <a href="https://github.com/ismaeElias" target="blank">
            <Circle size="40px" bg="gray.300" boxShadow="md">
              <BsGithub></BsGithub>
            </Circle>
          </a>
          <a
            href="https://www.linkedin.com/in/ismael-eliass/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Circle size="40px" bg="gray.300" boxShadow="md">
              <BsLinkedin></BsLinkedin>
            </Circle>
          </a>
        </Center>
      </Box>
    </Box>
  );
}

export default App;
