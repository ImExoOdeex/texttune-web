import { Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import { config } from "../../config/config";

export default function VoteButton() {
	return (
		<Button
			as={Link}
			href={config.topggVote}
			_hover={{ textDecor: "none", bg: "alpha" }}
			transform={"auto-gpu"}
			_active={{ bg: "alpha100", scale: 0.9 }}
			rounded={"xl"}
			bg={"transparent"}
		>
			<Flex flexDir={"row"}>
				<HStack spacing={2}>
					<Image src="/topgg.svg" h="19px" alt="top.gg logo" />
					<Text fontWeight={600}>Vote</Text>
				</HStack>
			</Flex>
		</Button>
	);
}
