import {
	Stack,
	Text,
	Link as ChakraLink,
	Box,
	VStack,
	Flex
} from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import pack from "../../../package.json";
import Link from "../utils/Link";

export default function Footer() {
	const navigate = useNavigate();

	return (
		<Box h={"auto"} as="footer" mt={10}>
			<Stack
				py={{ base: 10, md: "unset" }}
				rounded={"3xl"}
				mt={15}
				spacing={[7, 10, 20]}
				direction={{ base: "column", md: "row" }}
				justifyContent={"center"}
				maxW="800px"
				alignItems={{ base: "center", md: "start" }}
				mx="auto"
			>
				<Box pb={5}>
					<VStack align={{ base: "center", md: "start" }}>
						<Flex flexDir={"row"}>
							<Text
								fontWeight={"bold"}
								fontSize="18px"
								fontStyle=""
							>
								<Box as="span" color={"brand"}>
									T
								</Box>
								ext{" "}
								<Box as="span" color={"brand"}>
									T
								</Box>
								une
							</Text>
							<Text
								fontSize={"xs"}
								fontWeight={600}
								alignSelf={"end"}
								mb={1}
								ml={1.5}
							>
								v{pack.version}
							</Text>
						</Flex>
						<Text color={"textSec"} fontWeight="600">
							This site is{" "}
							<ChakraLink
								href="https://github.com/ImExoOdeex/texttune-web"
								target="_blank"
								textDecor={"underline"}
								variant={"link"}
							>
								open source
							</ChakraLink>{" "}
						</Text>
						<Text color={"textSec"} fontWeight={600}>
							Made with {`<3`} by{" "}
							<ChakraLink
								target="_blank"
								textDecor={"underline"}
								variant={"link"}
								href="https://github.com/ImExoOdeex/"
							>
								imexoodeex
							</ChakraLink>
						</Text>
					</VStack>
				</Box>

				<Stack direction={"row"} spacing={{ base: "70px", md: 20 }}>
					<VStack align={"start"} fontWeight="600">
						<Text fontWeight="700">Availability</Text>
						<Text
							color={"textSec"}
							transition={"color .2s"}
							_hover={{ color: "text" }}
							cursor="pointer"
							onClick={() => window.scrollTo(0, 0)}
							userSelect={"none"}
						>
							Go to the top
						</Text>
						<Text
							color={"textSec"}
							transition={"color .2s"}
							_hover={{ color: "text" }}
							cursor="pointer"
							onClick={() => navigate(-1)}
							userSelect={"none"}
						>
							Go back
						</Text>
					</VStack>

					<VStack align={"start"} fontWeight="600">
						<Text fontWeight="700">Other</Text>
						<Text color={"textSec"}>
							<ChakraLink
								transition={"color .2s"}
								_hover={{ color: "text", textDecor: "none" }}
								as={Link}
								prefetch="intent"
								to={"/tos"}
							>
								Terms of service
							</ChakraLink>
						</Text>
						<Text color={"textSec"} fontWeight="600">
							Copyright © {new Date().getFullYear()}
						</Text>
					</VStack>
				</Stack>
			</Stack>
		</Box>
	);
}
