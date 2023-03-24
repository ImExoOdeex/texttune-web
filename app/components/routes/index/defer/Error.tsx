import { Flex, Text } from "@chakra-ui/react";

export default function ErrorDeferElement() {
	return (
		<Flex
			rounded={"xl"}
			border="2px solid rgba(200, 59, 101, 0.2)"
			bg={"rgba(200, 59, 101, 0.2)"}
			p={5}
			w="100%"
			justifyContent={"center"}
			alignItems="center"
		>
			<Text fontWeight={600}>Failed to load bot stats {">_<"}</Text>
		</Flex>
	);
}
