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
    Text,
    Spacer,
    VStack,
    Button,
    Link
} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'

/*
**
* THE COMPONENT
**
*/

export default () => {

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
        <Stack w="100%">
            <Container maxW='container.lg'>
                <Flex direction={isLargerScreen ? "row" : "column"} position="relative">
                    <Circle size='90px' opacity="0.1" position="absolute" bottom="0" right="0" bg='tomato' />
                    <Circle size='210px' opacity="0.1" zIndex={0} position="absolute" top="0" left="0" bg='tomato' />
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
                        <Link href='https://www.linkedin.com/in/mallah-elmehdi/' isExternal>
                            <Button bg="tomato" color="white">
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
