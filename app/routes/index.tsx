import { Divider, Flex, VStack } from "@chakra-ui/react";
import { defer, fetch } from "@remix-run/node";
import About from "~/components/routes/index/About";
import Main from "~/components/routes/index/Main";
import Stats from "~/components/routes/index/Stats";

export async function loader() {
	const stats: Promise<{
		server_count: number;
		totalChecks: number;
		totalChars: number;
		totalWords: number;
	}> = fetch("http://localhost:3006").then((res) => res.json());

	return defer({ stats });
}

export default function Index() {
	return (
		<VStack
			spacing={"16"}
			maxW="1000px"
			w="100%"
			mx="auto"
			alignItems={"start"}
		>
			<Main />

			<Stats />

			<Flex px={4} w="100%">
				<Divider px={4} />
			</Flex>

			<About />
		</VStack>
	);
}
