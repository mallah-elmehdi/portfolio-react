import * as React from "react"
import { useState } from "react";
import img from '../../assets/elmehdi.jpeg'

/*
** CHAKRA COMPONENTS
*/

import {
    Stack,
    Circle,
    Flex,
    Container,
    Box,
    Image,
    Text,
    Spacer,
    VStack,
    Button,
    Link,
    keyframes,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'

/*
** THE COMPONENT
*/

export default () => {

    /*
    ** VARIABLES
    */

    const animationKeyframesCircle1 = keyframes`
        0% { transform: scale(1) }
        50% { transform: scale(2) }
        100% { transform: scale(1) }
    `;
    const animationKeyframesCircle2 = keyframes`
        0% { transform: scale(1) }
        50% { transform: scale(0.5) }
        100% { transform: scale(1) }
    `;

    const animationCircle1 = `${animationKeyframesCircle1} 20s ease-in-out infinite`;
    const animationCircle2 = `${animationKeyframesCircle2} 15s ease-in-out infinite`;

    /*
    ** HOOKS
    */
    const [isLargerScreen] = useMediaQuery('(min-width: 600px)')

    /*
    ** MAIN TEMPLATE
    */

    return (
        <Stack w="100%">
            <Container maxW='container.lg'>
                <Flex direction={isLargerScreen ? "row" : "column"} position="relative">
                    <Circle as={motion.div}
                        animation={animationCircle1}
                        size='90px' opacity="0.1" position="absolute" bottom="0" right="0" bg='tomato' />
                    <Circle as={motion.div}
                        animation={animationCircle2}
                        size='210px' opacity="0.1" zIndex={0} position="absolute" top="0" left="0" bg='tomato' />
                    <VStack alignItems="flex-start" spacing={5}>
                        <Text fontSize='7xl' lineHeight={1}>
                            Hi! I'm El Mehdi
                        </Text>
                        <Text fontSize='lg' zIndex={1}>
                            <Text>
                                I’m a software developer who has been working in the field for three years.
                            </Text>
                            <Text>
                                I’m passionate about creating quality products that meet all of the customer’s needs,
                            </Text>
                            <Text>
                                and I love learning new techniques and technologies that allow me to make that happen
                            </Text>
                        </Text>
                        <Link style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/mallah-elmehdi/' isExternal>
                        <Button
                            size="md"
                            as={motion.button}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            bg="tomato"
                            color="white"
                            _hover={{}}
                        >
                            Hire me
                        </Button>
                        </Link>
                    </VStack>
                    <Spacer />
                    <Box boxSize={isLargerScreen ? "2xs" : "100%"} mt={isLargerScreen ? 0 : 5}>
                        <Image src={img} borderRadius='full' alt='El Mehdi' />
                    </Box>
                </Flex>
            </Container>
        </Stack>
    )

}
