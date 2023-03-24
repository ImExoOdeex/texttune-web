import { useNavigate } from "@remix-run/react";
import { Button, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import Layout from "../Layout";
import Link from "~/components/utils/Link";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Error({ error }: { error: Error }) {
	const navigate = useNavigate();

	return (
		<Layout>
			<VStack
				spacing={5}
				w="100%"
				alignItems={"center"}
				justifyContent="center"
				minH={"calc(100vh - 140px)"}
			>
				<Heading as={"h1"} fontSize="3xl">
					{error.name}
				</Heading>
				<Text>{error.message}</Text>
				<HStack>
					<Button
						onClick={() => navigate(-1)}
						bg="alpha"
						_hover={{ bg: "alpha200" }}
						rounded={"xl"}
					>
						<HStack>
							<ArrowBackIcon />
							<Text>Go back</Text>
						</HStack>
					</Button>
					<Button
						as={Link}
						to="/"
						_hover={{ textDecor: "none", bg: "alpha200" }}
						bg="alpha"
						rounded={"xl"}
					>
						Go home
					</Button>
				</HStack>
			</VStack>
		</Layout>
	);
}
