import * as React from "react"

/*
** FONT SOURCE
*/

import '@fontsource/shadows-into-light/400.css'

/*
** CHAKRA COMPONENTS
*/

import {
	ChakraProvider,
	VStack
} from "@chakra-ui/react"
import theme from './theme'


/*
** OTHER COMPONENTS
*/

import { Header, Main, Skills } from './components'

/*
** THE COMPONENT
*/

export const App = () => (
	<ChakraProvider theme={theme}>
		<VStack minH="100vh" spacing={10} p={5}>
			<Header />
			<Main />
			<Skills />
		</VStack>
	</ChakraProvider>
)
