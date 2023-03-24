import { getCookieWithoutDocument } from "./components/utils/helpers/functions/cookiesHelpers";
import {
	Links,
	LiveReload,
	Meta,
	Scripts,
	useLoaderData
} from "@remix-run/react";
import { useMemo, useState, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";

export function Document({
	children
}: {
	children: React.ReactNode;
	title?: string;
}) {
	function getColorMode(cookies: string) {
		return getCookieWithoutDocument(CHAKRA_COOKIE_COLOR_KEY, cookies);
	}

	const DEFAULT_COLOR_MODE: "dark" | "light" | null = "dark";
	const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";

	let { cookies } = useLoaderData();
	if (typeof document !== "undefined") {
		cookies = document.cookie;
	}
	const colorMode = useMemo(() => {
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

export function DocumentWoLoader({
	children
}: {
	children: React.ReactNode;
	title?: string;
}) {
	function getColorMode(cookies: string) {
		return getCookieWithoutDocument(CHAKRA_COOKIE_COLOR_KEY, cookies);
	}

	const DEFAULT_COLOR_MODE: "dark" | "light" | null = "dark";
	const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";

	const [cookies, setCookies] = useState<string>("");

	useEffect(() => {
		setCookies(document.cookie);
	}, []);

	const colorMode = useMemo(() => {
		let color = getColorMode(cookies);

		if (!color && DEFAULT_COLOR_MODE) {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			setCookies(`${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`);
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
