import {
	Flex,
	Text,
	VStack,
	Heading,
	Divider,
	Badge,
	Box
} from "@chakra-ui/react";
import StrokeHeading from "~/components/layout/StrokeHeading";
import { motion } from "framer-motion";
import { config } from "../../config/config";
export default function About() {
	return (
		<Flex px={4} pos={"relative"} w="100%" flexDir={"column"}>
			<VStack w="100%" alignItems={"start"} spacing={10}>
				{/* ------------------------ HELLO ------------------------ */}

				<VStack spacing={3} alignItems="start">
					<Heading fontSize={"xl"} fontWeight={600}>
						Hi, I'm bot to help you improve your english skills or
						to correct others!
					</Heading>
					<Text>
						I've been designed to easily check grammar, spelling, or
						anything else without the need to copy and paste text
						into Google. So, let's get started by showing you some
						of my functionalities.
					</Text>
				</VStack>

				<Divider />

				{/* ------------------------ CONTEXT MENU ------------------------ */}

				<VStack spacing={3} alignItems="start">
					<Heading fontSize={"xl"} fontWeight={600}>
						Context Menu
					</Heading>
					<Text>
						You can check the spelling and grammar right clicking on
						message, then <b>Apps</b> {">"}{" "}
						<b>Check spelling/grammar</b>.
					</Text>
					<Box as="video" rounded={"md"} controls autoPlay>
						<source src="/discord.mp4" type="video/mp4" />
						Your browser does not support videos lmao
					</Box>
				</VStack>

				<Divider />

				{/* ------------------------ COMMANDS ------------------------ */}

				<VStack spacing={3} alignItems="start">
					<Heading fontSize={"xl"} fontWeight={600}>
						Slash commands
					</Heading>
					<Text>Bot contains total of 5 commands.</Text>

					<Text>
						<Badge>/grammarcheck</Badge> - utilizes ChatGPT, a
						highly accurate and reliable language model, to analyze
						and provide feedback on the grammar of any given text.
						With this feature, users can quickly and easily ensure
						that their written communications are error-free and
						professional. ChatGPT's extensive training on vast
						amounts of text data enables it to identify even subtle
						errors in grammar, punctuation, and syntax, and provide
						helpful suggestions for how to correct them.
					</Text>

					<Text>
						<Badge>/spellcheck</Badge> - useful tool for ensuring
						that written communications are free of spelling errors.
						Powered by advanced algorithms, this feature checks the
						spelling of any given text and generates buttons below
						the embed with suggested words for correction. This
						makes it easy for users to quickly and easily correct
						any spelling mistakes and produce error-free written
						content.
					</Text>

					<Text>
						<Badge>/definition</Badge> - allows users to easily
						check the definition of any word. When a word is
						entered, this feature generates a definition and part of
						speech, providing users with a comprehensive
						understanding of the word's meaning and usage.
					</Text>

					<Text>
						<Badge>/synonyms </Badge> - provides a comprehensive
						list of all possible synonyms for any word you enter.
					</Text>

					<Text>
						<Badge>/help </Badge> - help command that gives some
						help if you get stuck.
					</Text>
				</VStack>
			</VStack>

			<motion.div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "64px"
				}}
				initial={{ y: -80, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ ease: config.ease, duration: 1 }}
			>
				<StrokeHeading textTransform={"none"}>
					INVITE ME ^3^
				</StrokeHeading>
			</motion.div>
		</Flex>
	);
}
