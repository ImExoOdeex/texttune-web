import {
	ChakraProvider,
	Box,
	Heading,
	cookieStorageManagerSSR
} from "@chakra-ui/react";
import {
	json,
	type LinksFunction,
	type LoaderFunction,
	type MetaFunction
} from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
	useLoaderData
} from "@remix-run/react";
import { useMemo } from "react";
import Layout from "./components/layout/Layout";
import { getCookieWithoutDocument } from "./components/utils/helpers/functions/cookiesHelpers";
import theme from "./components/utils/theme";

export const meta: MetaFunction = () => ({
	title: "Text Tune | Gramamr discord bot",
	robots: "all",
	description: "",
	keywords: "",
	charset: "utf-8",
	viewport: "width=device-width,initial-scale=1",
	author: ".imexoodeex#0528"
});

export const links: LinksFunction = () => {
	return [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossOrigin: "anonymous"
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&&family=Outfit:wght@700;800;900&display=swap"
		}
	];
};

function Document({ children }: { children: React.ReactNode; title?: string }) {
	function getColorMode(cookies: string) {
		return getCookieWithoutDocument(CHAKRA_COOKIE_COLOR_KEY, cookies);
	}

	const DEFAULT_COLOR_MODE: "dark" | "light" | null = "dark";

	const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";

	let { cookies } = useLoaderData();

	// the client get the cookies from the document
	// because when we do a client routing, the loader can have stored an outdated value
	if (typeof document !== "undefined") {
		cookies = document.cookie;
	}

	// get and store the color mode from the cookies.
	// It'll update the cookies if there isn't any and we have set a default value
	let colorMode = useMemo(() => {
		let color = getColorMode(cookies);

		if (!color && DEFAULT_COLOR_MODE) {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`;
			color = DEFAULT_COLOR_MODE;
		}

		return color;
	}, [cookies]);

	return (
		<html
			lang="en"
			{...(colorMode && {
				"data-theme": colorMode,
				style: { colorScheme: colorMode }
			})}
		>
			<head>
				<Meta />
				<Links />
			</head>
			<body
				{...(colorMode && {
					className: `chakra-ui-${colorMode}`
				})}
			>
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export default function App() {
	const { cookies } = useLoaderData();

	return (
		<Document>
			<ChakraProvider
				colorModeManager={cookieStorageManagerSSR(cookies)}
				theme={theme}
			>
				<Layout>
					<Outlet />
				</Layout>
			</ChakraProvider>
		</Document>
	);
}

export const loader: LoaderFunction = async ({ request }) => {
	return json({ cookies: request.headers.get("cookie") ?? "" });
};

export function CatchBoundary() {
	const caught = useCatch();

	return (
		<Document>
			<ChakraProvider>
				<Box>
					<Heading as="h1" bg="purple.600">
						[CatchBoundary]: {caught.status} {caught.statusText}
					</Heading>
				</Box>
			</ChakraProvider>
		</Document>
	);
}

export function ErrorBoundary({ error }: { error: Error }) {
	return (
		<Document>
			<ChakraProvider>
				<Box>
					<Heading as="h1" bg="blue.500">
						[ErrorBoundary]: There was an error: {error.message}
					</Heading>
				</Box>
			</ChakraProvider>
		</Document>
	);
}
