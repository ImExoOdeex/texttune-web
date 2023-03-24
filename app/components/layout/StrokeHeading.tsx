import {
	Heading,
	useColorModeValue,
	type HeadingProps
} from "@chakra-ui/react";
import React from "react";

export default function StrokeHeading({
	children,
	...props
}: { children?: React.ReactNode } & HeadingProps) {
	const color = useColorModeValue("#515151", "#9e9e9e");

	return (
		<>
			<Heading
				as={"h1"}
				textAlign="center"
				fontSize={{ base: "5xl", md: "8xl" }}
				letterSpacing={{ base: "10px", md: "20px" }}
				color="transparent"
				fontFamily={"body"}
				textTransform={"uppercase"}
				fontWeight="black"
				sx={{ WebkitTextStroke: `0.5px ${color}` }}
				opacity={0.6}
				{...props}
			>
				{children}
			</Heading>
		</>
	);
}
