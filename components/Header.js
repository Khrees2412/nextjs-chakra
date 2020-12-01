import { Box, Flex, Text, Button, CloseButton, Divider, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Link from "next/link";

const MenuItems = props => {
	const { children, isLast, to = "/", ...rest } = props;
	return (
		<Text mb={{ base: isLast ? 0 : 8, sm: 0 }} mr={{ base: 0, sm: isLast ? 0 : 8 }} display="block" {...rest}>
			<Link href={to}>
				<a>{children}</a>
			</Link>
		</Text>
	);
};

const Header = props => {
	const [show, setShow] = useState(false);
	const toggleMenu = () => setShow(!show);

	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			p={8}
			bg="blue.700"
			color={["white", "white", "primary.700", "primary.700"]}
			{...props}
		>
			<Flex align="center">Fantasia</Flex>
			<Flex align="center">
				<Box
					display={{ base: "block", md: "none" }}
					mr={{ base: "2", lg: "0" }}
					cursor="pointer"
					onClick={toggleColorMode}
				>
					{colorMode === "light" ? <MoonIcon boxSize={6} /> : <SunIcon boxSize={8} />}
				</Box>

				<Box display={{ base: "block", md: "none" }} ml="2" cursor="pointer" onClick={toggleMenu}>
					{show ? <CloseButton /> : <HamburgerIcon boxSize={8} color="gray.50" />}
				</Box>
			</Flex>
			{show && <Divider orientation="horizontal" />}
			<Box display={{ base: show ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
				<Flex
					align={["center", "center", "center", "center"]}
					justify={["center", "space-between", "flex-end", "flex-end"]}
					direction={["column", "row", "row", "row"]}
					pt={[4, 8, 0, 0]}
				>
					<Box
						display={{ base: "none", lg: "block" }}
						mr={{ lg: "4" }}
						cursor="pointer"
						onClick={toggleColorMode}
					>
						{colorMode === "light" ? <MoonIcon boxSize={6} /> : <SunIcon boxSize={8} />}
					</Box>
					<MenuItems _hover={{ shadow: "outline", p: "1", borderRadius: "3px" }} to="/">
						Home
					</MenuItems>
					<MenuItems _hover={{ shadow: "outline", p: "1", borderRadius: "3px" }} to="/">
						How It works{" "}
					</MenuItems>
					<MenuItems _hover={{ shadow: "outline", p: "1", borderRadius: "3px" }} to="/">
						Features{" "}
					</MenuItems>
					<MenuItems _hover={{ shadow: "outline", p: "1", borderRadius: "3px" }} to="/">
						Pricing{" "}
					</MenuItems>
					<MenuItems to="/" isLast>
						<Button
							size="sm"
							rounded="md"
							color="red.500"
							bg="white"
							_hover={{
								bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
							}}
						>
							Create Account
						</Button>
					</MenuItems>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Header;
