import * as React from "react"
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import { motion } from 'framer-motion'

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
	const { toggleColorMode } = useColorMode()
	const text = useColorModeValue("light", "dark")
	const SwitchIcon = useColorModeValue(FaMoon, FaSun)

	return (
		<IconButton
		as={motion.button}
		whileHover={{ scale: 1.1 }}
		whileTap={{ scale: 0.9 }}
			borderRadius="full"
			size="md"
			fontSize="lg"
			color="current"
			marginLeft={5}
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
	)
}

export default ColorModeSwitcher
