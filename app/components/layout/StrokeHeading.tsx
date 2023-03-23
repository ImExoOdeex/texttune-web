import { Heading, type HeadingProps } from "@chakra-ui/react";
import React from "react";

export default function StrokeHeading({
	children,
	...props
}: { children?: React.ReactNode } & HeadingProps) {
	return (
		<>
			<Heading
				as={"h1"}
				fontSize={{ base: "5xl", md: "8xl" }}
				letterSpacing={"20px"}
				color="transparent"
				fontFamily={"body"}
				textTransform={"uppercase"}
				fontWeight="black"
				sx={{ WebkitTextStroke: "0.5px #6b6b6b" }}
				opacity={0.6}
				{...props}
			>
				{children}
			</Heading>
		</>
	);
}
