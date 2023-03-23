import { Flex } from "@chakra-ui/react";
import Header from "./Header/Header";
import BackgroundUtils from "./BackgroundUtils";
import Footer from "./Footer";

export default function Layout({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<BackgroundUtils />
			{/* <CookieConsent /> */}
			<Header />
			<Flex w="100%" minH={"calc(100vh - 111px)"}>
				<Flex flexDir={"column"} w="100%">
					{children}
				</Flex>
			</Flex>
			<Footer />
		</>
	);
}
