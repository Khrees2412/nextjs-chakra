import Head from "next/head";
import Header from "../components/Header";
import Card from "../components/Card";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<Head>
				<title>Next Practice</title>
			</Head>
			<Header />
			<Card />
		</ChakraProvider>
	);
}
export default App;
