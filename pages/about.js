import Head from "next/head";
import { useEffect } from "react";

function About() {
	return (
		<div>
			<Head>
				<title>About Next</title>
			</Head>
			About
			<style jsx>{`
				div {
					color: red;
					background-color: pink;
					padding: 50px;
					text-align: center;
				}
			`}</style>
		</div>
	);
}

export default About;
