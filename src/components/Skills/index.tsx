import * as React from "react"
import img from '../../assets/elmehdi.jpeg'

/*
**
* CHAKRA COMPONENTS
**
*/

import {
    Container,
    HStack,
    Icon,
    Box,
    Heading,
    Text
} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'

/*
**
* REACT ICONS
**
*/

import {
	FaReact,
	FaNode,
    FaHtml5
} from "react-icons/fa"

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

    // const skillsIcons: [ReactNode] = [FaReact, FaNode, FaHtml5]

    /*
    **
    * HOOKS
    **
    */

    const [isLargerScreen] = useMediaQuery('(min-width: 600px)')

    /*
    **
    * MAIN TEMPLATE
    **
    */

    return (
        <Container maxW='container.lg'>
            <Box p={5} shadow='sm' borderRadius="lg">
                <Heading fontSize='3xl' color="tomato">Skills</Heading>
                <HStack mt={5} spacing={5}>
                    {/*skillsIcons.map((icon) => {
                        <Icon as={icon} boxSize="9" />
                    }) */}
                    <Icon as={FaReact} boxSize="9" />
                    <Icon as={FaNode} boxSize="9" />
                    <Icon as={FaHtml5} boxSize="9" />
                </HStack>
            </Box>
        </Container>
    )

}
