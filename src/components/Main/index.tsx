import * as React from "react"

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
                    <Circle size='200px' opacity="0.2" position="absolute" top="0" right="0" bg='tomato' alignSelf="flex-end" />
                    <Circle size='250px' opacity="0.15" position="absolute" bottom="0" left="0" bg='tomato' alignSelf="flex-end" />
                    <Box boxSize='sm' alignSelf="flex-end">
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Box>
                    <Text fontSize='5xl' position="absolute" top="0" left="0" alignSelf="flex-start">
                        Hi ! I'm El Mehdi
                    </Text>
                </Flex>
            </Container>
        </Stack>
    )

}
