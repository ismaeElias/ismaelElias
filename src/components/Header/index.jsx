import React from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import {TbChartLine, TbHome2, TbNotes, TbSend} from "react-icons/all.js";

function Header() {
    return (
        <Flex
            h="60px"
            w="100vw"
            position={"fixed"}
            zIndex={"2"}
            bgColor="white"
            alignItems={"center"}
            justifyContent={"space-around"}
            boxShadow='md'
        >
            <Flex
                direction="column"
                alignItems="center"
                cursor="default"
            >
                <Text fontSize={"lg"} fontWeight="bold" color="orange.400">ISMAEL ELIAS</Text>
                <Text fontSize={"sm"}>DESENVOLVEDOR FULL-STACK - <strong>SITE EM CONSTRUÇÃO</strong></Text>
            </Flex>
            <Flex gap="4"
                  alignItems="center">
                <Button colorScheme='orange' variant='ghost' leftIcon={<TbHome2/>
                }>
                    INICIO
                </Button>
                <Button colorScheme='orange' variant='ghost' leftIcon={<TbNotes/>
                }>
                    SOBRE
                </Button>
                <Button colorScheme='orange' variant='ghost' leftIcon={<TbChartLine/>
                }>
                    EXPERIENCIA
                </Button>

                <Button colorScheme="orange" rightIcon={<TbSend/>}>CONTATO</Button>
            </Flex>
        </Flex>

    );
}

export default Header;