import * as React from "react"
import img from '../../assets/elmehdi.jpeg'

/*
** CHAKRA COMPONENTS
*/

import {
    Container,
    HStack,
    Icon,
    Box,
    Heading,
    Text,
    Spacer,
    Stack,
    useMediaQuery,
    useColorMode
} from "@chakra-ui/react"
import {
    motion,
} from "framer-motion"

/*
** REACT ICONS
*/

import {
	FaReact,
    FaHtml5,
    FaCss3,
    FaSass,
    FaNodeJs,
    FaShopify,
} from "react-icons/fa"

import {
    SiDjango,
    SiMongodb,
    SiSqlite
} from "react-icons/si";

/*
** THE COMPONENT
*/

export default () => {

    /*
    ** HOOKS
    */

    const { colorMode } = useColorMode();
    const [isLargerScreen] = useMediaQuery('(min-width: 600px)')

    /*
    ** VARIABLES
    */

    const iconColor : string = (colorMode === 'light') ? 'blackAlpha.500' : 'gray.200';
    const headingColor : string = (colorMode === 'light') ? 'blackAlpha.700' : 'gray.400';

    /*
    * MAIN TEMPLATE
    */

    return (
        <Container maxW='container.lg'>
            <Stack direction={isLargerScreen ? "row" : "column"}>
                <Box as={motion.div}
                whileHover={{ scale: 1.1 }}
                 p={5} borderRadius="lg" shadow="sm">
                    <Heading fontSize="5xl" bgGradient='linear(to-tl, orange.100, tomato)' bgClip='text'>
                        3+
                    </Heading>
                    <Text fontSize="lg">
                        Years of experience
                    </Text>
                </Box>
                <Spacer />
                <Box p={5} borderRadius="lg" shadow="sm" as={motion.div}
                    whileHover={{ scale: 1.1 }}
                >
                    <Heading fontSize="3xl" mb={5} color={headingColor}>
                        Front End
                    </Heading>
                    <HStack spacing={5} color={iconColor}>
                        <Icon as={FaReact} boxSize="10" />
                        <Icon as={FaHtml5} boxSize="10" />
                        <Icon as={FaCss3} boxSize="10" />
                        <Icon as={FaSass} boxSize="10" />
                        <Icon as={FaShopify} boxSize="10" />
                    </HStack>
                </Box>
                <Spacer />
                <Box p={5} borderRadius="lg" shadow="sm" as={motion.div}
                    whileHover={{ scale: 1.1 }}
                >
                    <Heading fontSize="3xl" mb={5} color={headingColor}>
                        Back End
                    </Heading>
                    <HStack spacing={5} color={iconColor}>
                        <Icon as={FaNodeJs} boxSize="10" />
                        <Icon as={SiDjango} boxSize="10" />
                    </HStack>
                </Box>
                <Spacer />
                <Box p={5} borderRadius="lg" shadow="sm" as={motion.div}
                    whileHover={{ scale: 1.1 }}
                >
                    <Heading fontSize="3xl" mb={5} color={headingColor}>
                        Database
                    </Heading>
                    <HStack spacing={5} color={iconColor}>
                        <Icon as={SiMongodb} boxSize="10" />
                        <Icon as={SiSqlite} boxSize="10" />
                    </HStack>
                </Box>
            </Stack>
        </Container>
    )

}
