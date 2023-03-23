import { VStack } from "@chakra-ui/react";
import Main from "~/components/routes/index/Main";

export default function Index() {
	return (
		<VStack
			spacing={10}
			maxW="1000px"
			w="100%"
			mx="auto"
			justifyContent={"start"}
		>
			<Main />
		</VStack>
	);
}
