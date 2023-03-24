import { ArrowBackIcon } from "@chakra-ui/icons";
import {
	VStack,
	Heading,
	Button,
	HStack,
	Text,
	Divider
} from "@chakra-ui/react";
import Link from "~/components/utils/Link";

export default function tos() {
	return (
		<VStack
			px={4}
			spacing={"10"}
			maxW="1000px"
			w="100%"
			mx="auto"
			alignItems={"start"}
		>
			<Button
				as={Link}
				to="/"
				rounded={"xl"}
				variant="ghost"
				bg={"alpha"}
				_hover={{ bg: "alpha200", textDecor: "none" }}
			>
				<HStack>
					<ArrowBackIcon />
					<Text fontWeight={500}>Go back</Text>
				</HStack>
			</Button>
			<Heading as={"h1"}>Terms of service</Heading>

			<VStack
				spacing={5}
				alignItems="start"
				sx={{
					"> h2": {
						fontSize: "xl"
					},
					"> p": {
						fontSize: "0.9rem"
					}
				}}
			>
				<Heading>Website</Heading>
				<Divider />
				<Heading>Acceptance of Terms</Heading>
				<Text>
					By accessing and using our website, you agree to be bound by
					these terms and conditions. If you do not agree to these
					terms, you should not use our website.
				</Text>

				<Heading>Use of Our Website</Heading>
				<Text>
					Our website is intended for informational purposes only. You
					may use our website for personal, non-commercial purposes
					only. You may not use our website for any illegal or
					unauthorized purpose.
				</Text>

				<Heading>Limitations of Liability</Heading>
				<Text>
					We are not liable for any damages or losses arising out of
					or in connection with the use of our website. We do not
					warrant that our website will be uninterrupted or
					error-free.
				</Text>

				<Heading>Ownership and Copyright</Heading>
				<Text>
					All content on our website is owned by us or our licensors
					and is protected by copyright and other intellectual
					property laws. You may not reproduce, distribute, modify, or
					create derivative works of any content on our website
					without our prior written consent.
				</Text>

				<Heading>Privacy Policy</Heading>
				<Text>
					We take your privacy seriously and have a separate privacy
					policy that governs how we collect, use, and protect your
					personal information. Please refer to our privacy policy for
					more information.
				</Text>

				<Heading>Changes to Terms of Service</Heading>
				<Text>
					We may update these terms of service from time to time. By
					continuing to use our website after any such changes, you
					agree to be bound by the updated terms of service.
				</Text>
			</VStack>

			<VStack
				spacing={5}
				alignItems="start"
				sx={{
					"> h2": {
						fontSize: "xl"
					},
					"> p": {
						fontSize: "0.9rem"
					}
				}}
			>
				<Heading>
					Bot <i>Text Tune</i>
				</Heading>
				<Divider />
				<Heading>Limitations</Heading>
				<Text>
					Bot has daily limits of one guild per day. Exacly: 25 spell
					check, 15 grammar check, 500 definitions, 500 synonyms. Do
					not spam bot interactions.
				</Text>
				<Heading>Privacy</Heading>
				<Text>
					Bot <b>does not</b> store message content. Instead of this,
					it stores text or word length. According to this, as you can
					see, we store every interaction due to limitations of APIs,
					which we use. We need to limit guild usage to protect from
					spammers and other bugs.
				</Text>
			</VStack>
		</VStack>
	);
}
