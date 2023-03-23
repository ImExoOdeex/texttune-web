import { Flex, Image } from "@chakra-ui/react";
import { config } from "../config/config";

export default function BackgroundUtils() {
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
					/>
				</Flex>
			</Flex>
			<Flex pos={"absolute"} zIndex={-1} maxH={"100vh"} w="100%" h="100%">
				<Flex
					w="100%"
					h="100%"
					bgGradient={`linear(170deg, ${config.color}, transparent)`}
					opacity={0.1}
				/>
			</Flex>
		</>
	);
}
