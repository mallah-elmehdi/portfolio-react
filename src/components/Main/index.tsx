import * as React from "react"
import img from '../../assets/elmehdi.jpeg'

/*
**
* CHAKRA COMPONENTS
**
*/

import {
    Stack,
    Circle,
    Flex,
    Container,
    Box,
    Image,
    Text
} from "@chakra-ui/react"

import { useMediaQuery } from '@chakra-ui/media-query'

/*
**
* REACT ICONS
**
*/

import { } from "react-icons/fa"

/*
**
* OTHER COMPONENTS
**
*/


/*
**
* THE COMPONENT
**
*/

export default () => {

    /*
    **
    * VARIABLES
    **
    */

    const [isNotSmallerScreen] = useMediaQuery('(min-width=600px)');

    /*
    **
    * MAIN TEMPLATE
    **
    */

    return (
        <Stack w="100%">
            <Container maxW='container.lg'>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} position="relative">
                    <Circle size='150px' opacity="0.1" position="absolute" top="0" right="0" bg='tomato' alignSelf="flex-end" />
                    <Circle size='200px' opacity="0.2" position="absolute" bottom="0" left="0" bg='tomato' alignSelf="flex-end" />
                    <Box boxSize='sm' alignSelf="flex-end">
                        <Image src={img} borderRadius='full' alt='El Mehdi' />
                    </Box>
                    <Text fontSize='7xl' position="absolute" top="0" left="0" alignSelf="flex-start">
                        Hi! I'm El Mehdi
                    </Text>
                </Flex>
            </Container>
        </Stack>
    )

}
