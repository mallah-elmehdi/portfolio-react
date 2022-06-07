import * as React from "react"

/*
**
* FONT SOURCE
**
*/

import '@fontsource/shadows-into-light/400.css'

/*
**
* CHAKRA COMPONENTS
**
*/

import {
	ChakraProvider,
	Box,
	Text,
	Link,
	VStack,
	Code,
	Grid,
	HStack,
} from "@chakra-ui/react"
import theme from './theme'


/*
**
* OTHER COMPONENTS
**
*/

import { Header, Main } from './components'

/*
**
* THE COMPONENT
**
*/

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box fontSize="xl">
			<Grid minH="100vh" p={3}>
				<VStack spacing={0}>
					<Header />
					<Main />
				</VStack>
			</Grid>
		</Box>
	</ChakraProvider>
)
