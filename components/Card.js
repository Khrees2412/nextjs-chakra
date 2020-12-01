import { Text, Center, Flex, Box, Button, Grid, useColorMode } from "@chakra-ui/react";
import cardDetails from "./data";

export default function Card() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Center>
				<Text mb="3" as="h1" fontWeight="bold" fontSize="20px">
					Check out our products
				</Text>
			</Center>

			<Grid templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]} gap={2}>
				{cardDetails.map(({ title, dept, price, description }, index) => (
					<Box
						key={index}
						maxW="100%"
						borderWidth="1px"
						mb="3"
						borderColor="gray.400"
						borderRadius="lg"
						mx="6"
					>
						<Flex direction="column" p={[3, 5]} borderRadius="lg" mx="2">
							<Text mb="2" color={colorMode === "light" ? "blue.700" : "gray.50"}>
								{title}
							</Text>
							<Text bg="pink.200" mr="auto" p="2" borderRadius="lg" mb="2" color="blue.700">
								{dept}
							</Text>
							<Text bg="green.200" color="blue.700" mb="2" mr="auto" p="2" borderRadius="lg">
								$ {price}
							</Text>
							<Text color={colorMode === "light" ? "black" : "gray.50"}>{description}</Text>
							<Center>
								<Button
									bg="blue.500"
									color="gray.50"
									borderWidth="1px"
									borderRadius="lg"
									p="1.5"
									m="2"
									_hover={{
										bg: "blue.600",
										color: "gray.100"
									}}
								>
									Add to Cart
								</Button>
							</Center>
						</Flex>
					</Box>
				))}
			</Grid>
		</>
	);
}
