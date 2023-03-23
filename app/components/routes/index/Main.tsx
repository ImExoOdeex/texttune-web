import {
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	Stack,
	Text,
	VStack
} from "@chakra-ui/react";
import DiscordIcon from "../../layout/icons/DiscordIcon";
import { config } from "../../config/config";

export default function Main() {
	return (
		<Flex
			px={4}
			pos={"relative"}
			minH={"calc(100vh - 140px)"}
			justifyContent="center"
			alignItems={"center"}
		>
			<Stack direction={{ base: "column", md: "row" }} spacing={10}>
				<VStack w="100%" alignItems={"start"} spacing={5}>
					<Heading fontSize={"5xl"}>Text Tune</Heading>
					<Text lineHeight={"170%"}>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Repellendus quo, minus autem animi similique
						aspernatur incidunt nesciunt consequatur ad, illum error
						veniam praesentium aut, ipsa deleniti voluptatibus
						asperiores nobis provident.
					</Text>
					<HStack spacing={5}>
						<Button
							as={Link}
							_hover={{
								textDecoration: "none",
								bg: "discord.900"
							}}
							h="40px"
							px={4}
							fontWeight={500}
							bg="discord.100"
							color={"white"}
							transform={"auto-gpu"}
							_active={{ scale: 0.9 }}
							rounded="xl"
							href={config.discordBotInvite}
						>
							<HStack h={"100%"} alignItems={"center"}>
								<DiscordIcon />
								<Text>Invite bot to your server</Text>
							</HStack>
						</Button>
						<Button
							as={Link}
							rounded="xl"
							bg={"alpha"}
							variant={"solid"}
							_hover={{ textDecor: "none", bg: "alpha100" }}
						>
							<HStack spacing={2}>
								<Image src="/topgg.svg" h="19px" />
								<Text fontWeight={600}>Vote</Text>
							</HStack>
						</Button>
					</HStack>
				</VStack>
				<Image h="250px" src="/texttune.svg" draggable={false} />
			</Stack>
			<Heading
				as={"h1"}
				fontSize={{ base: "5xl", md: "8xl" }}
				letterSpacing={"30px"}
				color="transparent"
				fontFamily={"body"}
				textTransform={"uppercase"}
				fontWeight="black"
				sx={{ WebkitTextStroke: "0.5px #6b6b6b" }}
				opacity={0.4}
				pos={"absolute"}
				bottom={"-50px"}
			>
				explore
			</Heading>
		</Flex>
	);
}