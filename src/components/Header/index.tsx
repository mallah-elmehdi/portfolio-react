import * as React from "react"

/*
** CHAKRA COMPONENTS
*/

import {
	Box,
	Spacer,
	Heading,
    Flex,
    IconButton,
    Link,
	Container
} from "@chakra-ui/react"
import { motion } from 'framer-motion'

/*
** REACT ICONS
*/

import {
	FaLinkedin,
	FaGithub
} from "react-icons/fa"

/*
** OTHER COMPONENTS
*/

import { ColorModeSwitcher } from "../../components"

/*
** THE COMPONENT
*/

export default () => {

    /*
    ** MAIN TEMPLATE
    */

    return (
		<Container maxW='container.xl'>
			<Flex p={2} w="100%" minWidth='max-content' alignItems='center' gap='2'>
				<Box p='2'>
					<Heading size='lg' bgGradient='linear(to-tl, tomato, orange.100, tomato)' bgClip='text'>EL MEHDI</Heading>
				</Box>
				<Spacer />
				<Flex>
					<Link href='https://www.linkedin.com/in/mallah-elmehdi/'
					as={motion.button}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					isExternal>
						<IconButton
							aria-label="Github Profile"
							borderRadius="full"
							size="md"
							fontSize="lg"
							color="current"
							marginLeft={1}
							icon={<FaGithub />}
						/>
					</Link>
					<Link href='https://github.com/mallah-elmehdi'
					as={motion.button}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					 isExternal>
						<IconButton
							aria-label="LinkedIn Profile"
							borderRadius="full"
							size="md"
							fontSize="lg"
							color="current"
							marginLeft={1}
							icon={<FaLinkedin />}
						/>
					</Link>
					<ColorModeSwitcher />
				</Flex>
			</Flex>
		</Container>
    )

}
