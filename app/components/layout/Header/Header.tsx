import {
	Flex,
	Heading,
	HStack,
	Image,
	Text,
	useColorMode,
	useEventListener
} from "@chakra-ui/react";
import Link from "../../utils/Link";
import ThemeToggle from "./ToggleTheme";
import InviteButton from "./InviteButton";
import { useEffect, useState } from "react";
import VoteButton from "./VoteButton";

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
			h={{ base: "60px", md: "80px" }}
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
					<Link
						to="/"
						alignItems={"center"}
						_hover={{ textDecor: "none" }}
						role="group"
					>
						<Heading
							as={"h1"}
							fontSize="2xl"
							transition={"all .2s"}
							transform={"auto-gpu"}
						>
							<HStack spacing={3} alignItems={"center"}>
								<Image
									src="/texttune.svg"
									h="28.8px"
									rotate={"-90deg"}
									transform="auto-gpu"
									_groupHover={{ rotate: "0deg" }}
									transition="transform .4s cubic-bezier(0.25, 0.1, 0.25, 1.25)"
								/>
								<Text>Text Tune</Text>
							</HStack>
						</Heading>
					</Link>
				</HStack>

				<HStack spacing={3} display={{ base: "none", lg: "flex" }}>
					<ThemeToggle />
					<VoteButton />
					<InviteButton />
				</HStack>

				{/* <Box display={{ base: "flex", lg: "none" }} cursor="pointer">
					<Menu>
						{({ isOpen }) => (
							<>
								<MenuButton
									aria-label="Mobile menu button"
									aria-labelledby="Mobile menu button"
									boxSize={"20px"}
								>
									<HamburgerMenu isOpen={isOpen} />
								</MenuButton>
							</>
						)}
					</Menu>
				</Box> */}
			</Flex>
		</Flex>
	);
}
