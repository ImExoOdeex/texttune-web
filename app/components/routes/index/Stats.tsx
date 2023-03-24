import { VStack, Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import ErrorDeferElement from "./defer/Error";

export default function Stats() {
	const { stats } = useLoaderData();

	const items = [
		{
			id: 0,
			title: "Server count",
			stat: "server_count"
		},
		{
			id: 1,
			title: "Total interactions made",
			stat: "totalChecks"
		},
		{
			id: 2,
			title: "Total chars checked",
			stat: "totalChars"
		},
		{
			id: 3,
			title: "Total words checked",
			stat: "totalWords"
		}
	];

	return (
		<VStack
			spacing={5}
			pt={10}
			px={4}
			pos={"relative"}
			justifyContent="center"
			alignItems={"center"}
			w="100%"
		>
			<Heading alignSelf={"start"} ml={2}>
				Bot statistics
			</Heading>
			{/* server - FaUsers */}
			{/* interactions - HiOutlineCommandLine */}
			{/* characters - VscWordWrap */}
			{/* words - VscWholeWord */}

			<Stack direction={{ base: "column", md: "row" }} w="100%">
				{items.map((i) => (
					<Flex flexDir={"row"} w="100%" key={i.id}>
						<Flex h="100%" w="3px" bg="text" opacity={0.15} />
						<VStack alignItems={"start"} w="100%" p={3} spacing={2}>
							<Suspense
								fallback={
									<Flex w="100px" h="24px" bg="alpha100" />
								}
							>
								<Await
									resolve={stats}
									errorElement={<ErrorDeferElement />}
								>
									{(stats) => (
										<Heading fontSize={"xl"}>
											{stats[i.stat]}+
										</Heading>
									)}
								</Await>
							</Suspense>
							<Text fontWeight={300} color="textSec">
								{i.title}
							</Text>
						</VStack>
					</Flex>
				))}
			</Stack>
		</VStack>
	);
}
