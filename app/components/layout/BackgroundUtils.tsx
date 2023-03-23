import { Flex, Image, useColorMode } from "@chakra-ui/react";
import { config } from "../config/config";

export default function BackgroundUtils() {
	const { colorMode } = useColorMode();

	return (
		<>
			<Flex pos={"absolute"} zIndex={-1} maxH={"100vh"} w="100%" h="100%">
				<Flex
					w="100%"
					h="100%"
					justifyContent={"center"}
					alignItems="center"
				>
					<Image
						h="400px"
						objectFit={"cover"}
						objectPosition={"center"}
						opacity={0.2}
						filter={"blur(15px)"}
						src="/texttune.svg"
						alt="text tune logo"
					/>
				</Flex>
			</Flex>
			<Flex pos={"absolute"} zIndex={-1} w="100%" h="100%">
				<Flex
					w="100%"
					h="100%"
					bgGradient={`linear(170deg, ${config.color}, transparent)`}
					opacity={colorMode === "light" ? 0.3 : 0.1}
				/>
			</Flex>
		</>
	);
}
