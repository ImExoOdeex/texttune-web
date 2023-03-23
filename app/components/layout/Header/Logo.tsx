import { Heading, HStack, Image, Text, Flex, Icon } from "@chakra-ui/react";
import Link from "~/components/utils/Link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Logo() {
	const [hovered, setHovered] = useState<boolean>(false);

	return (
		<>
			<Link
				to="/"
				alignItems={"center"}
				_hover={{ textDecor: "none" }}
				role="group"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<Heading
					as={"h1"}
					fontSize="2xl"
					transition={"all .2s"}
					transform={"auto-gpu"}
				>
					<HStack spacing={3} alignItems={"center"}>
						<Flex flexDir={"column"} alignItems="center">
							<Image src="/texttune-kbd.svg" h="25px" w="40px" />
							<AnimatePresence mode="wait">
								{hovered && (
									<motion.div
										style={{
											display: "flex",
											overflow: "hidden",
											margin: 0,
											padding: 0,
											maxHeight: "20px"
										}}
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{
											ease: [0.25, 0.1, 0.25, 1]
										}}
									>
										<Icon h={"15px"} w="10px">
											<svg
												id="Layer_1"
												data-name="Layer 1"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 180.82 120.7"
											>
												<defs>
													<clipPath
														id="clip-path"
														transform="translate(-241.44 -482.56)"
													>
														<rect
															width="663.69"
															height="633.52"
															style={{
																fill: "none"
															}}
														/>
													</clipPath>
												</defs>
												<g
													style={{
														clipPath:
															"url(#clip-path)"
													}}
												>
													<path
														d="M353.3,491.4a30.44,30.44,0,0,0-42.9,0l-60.33,60.34A30.33,30.33,0,0,0,293,594.63l38.89-39.24,38.89,39.24a30.33,30.33,0,0,0,42.89-42.89Z"
														transform="translate(-241.44 -482.56)"
														style={{
															fill: "#4d4093"
														}}
													/>
												</g>
											</svg>
											<svg
												id="Layer_1"
												data-name="Layer 1"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 180.82 120.7"
											>
												<defs>
													<clipPath
														id="clip-path"
														transform="translate(-241.44 -482.56)"
													>
														<rect
															width="663.69"
															height="633.52"
															style={{
																fill: "none"
															}}
														/>
													</clipPath>
												</defs>
												<g
													style={{
														clipPath:
															"url(#clip-path)"
													}}
												>
													<path
														d="M353.3,491.4a30.44,30.44,0,0,0-42.9,0l-60.33,60.34A30.33,30.33,0,0,0,293,594.63l38.89-39.24,38.89,39.24a30.33,30.33,0,0,0,42.89-42.89Z"
														transform="translate(-241.44 -482.56)"
														style={{
															fill: "#4d4093"
														}}
													/>
												</g>
											</svg>
										</Icon>
									</motion.div>
								)}
							</AnimatePresence>
						</Flex>
						<Text>Text Tune</Text>
					</HStack>
				</Heading>
			</Link>
		</>
	);
}
