import { HStack, Link, Text } from "@chakra-ui/react";
import DiscordIcon from "../icons/DiscordIcon";
import { config } from "../../config/config";

export default function InviteButton() {
	return (
		<Link
			_hover={{ textDecoration: "none", bg: "discord.900" }}
			h="40px"
			px={4}
			fontWeight={500}
			bg="discord.100"
			rounded={"xl"}
			color={"white"}
			alignItems={"center"}
			userSelect={"none"}
			transform={"auto-gpu"}
			_active={{ scale: 0.9 }}
			href={config.discordBotInvite}
		>
			<HStack h={"100%"} alignItems={"center"}>
				<DiscordIcon />
				<Text>Invite bot</Text>
			</HStack>
		</Link>
	);
}
