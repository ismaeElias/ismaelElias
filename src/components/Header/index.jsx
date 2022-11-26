import React from 'react';
import {
    Button,
    Collapse,
    Flex,
    IconButton,
    Link,
    Stack,
    Text,
    Box,
    useColorModeValue,
    useDisclosure,
    Divider
} from "@chakra-ui/react";
import {TbChartLine, TbHome2, TbNotes, TbSend} from "react-icons/all.js";
import {ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon, Icon} from "@chakra-ui/icons";

function Header() {
    const {isOpen, onOpen, onToggle, onClose, getDisclosureProps, getButtonProps} = useDisclosure();
    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()
    return (
        <Flex
            h="60px"
            w="100vw"
            position={"fixed"}
            zIndex={"2"}
            paddingX={{base: "20px", md: "40px"}}
            bgColor="white"
            alignItems={"center"}
            justifyContent={"space-around"}
            boxShadow='md'
        >
            <Flex
                flex={{base: "flex", md: 'auto'}}
                display={{base: 'flex', md: 'none'}}
                {...buttonProps}>

                <IconButton
                    colorScheme="orange"
                    onClick={ontoggle}
                    icon={
                        isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
            </Flex>
            <Flex
                direction="column"
                alignItems="center"
                cursor="default"
                flex={{base: 1}}
            >
                <Text fontSize={{base: "xs", md: "lg"}} fontWeight="bold" color="orange.400">ISMAEL ELIAS</Text>
                <Text fontSize={{base: "xs", md: "0.6rem", lg: "sm"}} textAlign={"center"}>DESENVOLVEDOR FULL-STACK
                    - <strong>SITE EM CONSTRUÇÃO</strong></Text>
            </Flex>

            <Flex display={{base: 'none', md: 'flex'}} ml={10}>
                <DesktopNav/>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav {...disclosureProps}/>
            </Collapse>

        </Flex>

    );
}

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            position={"absolute"}
            display={{md: 'none'}}
            left="0"
            top="61px"
        >
            <Box w="100vw">
                {NAV_ITEMS.map((item) => (
                    <>
                    <Button  as={"a"} key={item.label} colorScheme='orange' {...item} variant="ghost" leftIcon={item.icon} rightIcon={""}>
                        {item.label}
                    </Button>
                        <Divider/>
                    </>
                ))}
            </Box>
        </Stack>
    );
};

const DesktopNav = () => {
    return (
        <Flex gap="4"
              alignItems="center">

            {NAV_ITEMS.map((item) => <Button key={item.label} colorScheme='orange' {...item}>
                {item.label}
            </Button>)}
        </Flex>
    );
}
const NAV_ITEMS = [
    {
        label: 'INICIO',
        icon: <TbHome2/>,
        href: '#',
        leftIcon: <TbHome2/>,
        variant: 'ghost'
    },
    {
        label: 'SOBRE',
        icon: <TbNotes/>,
        href: '#',
        leftIcon: <TbNotes/>,
        variant: 'ghost'
    },
    {
        label: 'EXPERIENCIA',
        icon: <TbChartLine/>,
        href: '#',
        leftIcon: <TbChartLine/>,
        variant: 'ghost'
    },
    {
        label: 'CONTATO',
        icon: <TbSend/>,
        href: '#',
        rightIcon: <TbSend/>
    },
];
export default Header;