import {
	Flex,
	HStack,
	Image,
	Link,
	useColorMode,
	useEventListener
} from "@chakra-ui/react";
import ThemeToggle from "./ToggleTheme";
import InviteButton from "./InviteButton";
import { useEffect, useState } from "react";
import VoteButton from "./VoteButton";
import Logo from "./Logo";
import { config } from "../../config/config";
import { AddIcon } from "@chakra-ui/icons";

export default function Header() {
	useEventListener("keydown", (event: any) => {
		const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator?.platform);
		const hotkey = isMac ? "metaKey" : "ctrlKey";
		if (event?.key?.toLowerCase() === "i" && event[hotkey]) {
			event.preventDefault();
			toggleColorMode();
		}
	});

	const { toggleColorMode } = useColorMode();

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Flex
			as={"header"}
			w="100%"
			h={{ base: "60px", md: "70px" }}
			pos={"sticky"}
			top={0}
			backdropFilter={scrollPosition < 0 ? "none" : "blur(20px)"}
			zIndex={1799}
			borderBottom={"1px"}
			borderBottomColor={scrollPosition > 0 ? "alpha" : "transparent"}
			transition={"all .2s"}
		>
			<Flex
				w="100%"
				maxW={"1300px"}
				px={4}
				alignItems="center"
				h="100%"
				mx="auto"
				justifyContent={"space-between"}
			>
				<HStack spacing={5}>
					<Logo />
				</HStack>

				<HStack spacing={3} display={{ base: "none", sm: "flex" }}>
					<ThemeToggle />
					<VoteButton />
					<InviteButton />
				</HStack>

				<HStack spacing={5} display={{ base: "flex", sm: "none" }}>
					<ThemeToggle />
					<Link
						href={config.topggVote}
						boxSize="40px"
						display={"flex"}
						alignItems="center"
						justifyContent={"center"}
					>
						<Image
							src="/topgg.svg"
							boxSize={"8"}
							alt="top.gg logo"
						/>
					</Link>
					<Link
						href={config.discordBotInvite}
						boxSize="40px"
						display={"flex"}
						alignItems="center"
						justifyContent={"center"}
					>
						<AddIcon />
					</Link>
				</HStack>
			</Flex>
		</Flex>
	);
}
