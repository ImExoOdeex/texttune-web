import {
	type ThemeOverride,
	type ThemeConfig,
	extendBaseTheme,
	theme as chakraTheme,
	mergeThemeOverride
} from "@chakra-ui/react";
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";
import type { Dict } from "@chakra-ui/utils";

const config: ThemeConfig = {
	initialColorMode: "system",
	useSystemColorMode: true
};

const styles = {
	global: (props: StyleFunctionProps | Dict<any>) => ({
		body: {
			minH: "100vh",
			bg: mode("bg.100", "bg.900")(props),
			overflowY: "scroll",
			"-webkit-tap-highlight-color": "transparent"
		},
		th: {
			color: mode("#393942cc!important", "#dedef1be!important")(props)
		},
		html: {
			"scroll-behavior": "smooth",
			"*::selection": {
				backgroundColor: "#4d4093",
				color: "white"
			}
		}
	})
};

const colors = {
	brand: {
		"50": "#EFEDF7",
		"100": "#D2CDE9",
		"200": "#B5ADDB",
		"300": "#978DCD",
		"400": "#7A6DC0",
		"500": "#5D4DB2",
		"600": "#5D4DB2",
		"700": "#5D4DB2",
		"800": "#5D4DB2",
		"900": "#5D4DB2"
	},
	bg: {
		100: "#FDF9F6",
		900: `#080808`
	},
	sec: {
		100: "#93b8e9",
		900: "#0078D7"
	},
	discord: {
		100: "#5865F2",
		900: "#6A5ACD"
	}
};

const { Button, Link, Heading, Tooltip, Badge, Divider } =
	chakraTheme.components;

const theme = extendBaseTheme({
	colors,
	config,
	styles,
	fonts: {
		body: `"Poppins", sans-serif`,
		heading: '"Outfit", "Poppins", sans-serif'
	},
	semanticTokens: {
		colors: {
			brand: {
				default: "brand.900",
				_dark: "brand.100"
			},
			sec: {
				default: "#0078D7",
				_dark: "#93b8e9"
			},
			text: {
				default: "blackAlpha.900",
				_dark: "whiteAlpha.900"
			},
			textSec: {
				default: "blackAlpha.800",
				_dark: "whiteAlpha.800"
			},
			gold: {
				default: "orange.300",
				_dark: "orange.200"
			},
			inv: {
				default: "white",
				_dark: "black"
			},
			invNormal: {
				default: "bg.900",
				_dark: "bg.100"
			},
			red: {
				default: "red.500",
				_dark: "red.400"
			},
			green: {
				default: "green.600",
				_dark: "green.400"
			},
			bg: {
				default: "bg.100",
				_dark: "bg.900"
			},
			alpha: {
				default: "blackAlpha.50",
				_dark: "whiteAlpha.50"
			},
			alpha100: {
				default: "blackAlpha.100",
				_dark: "whiteAlpha.100"
			},
			alpha200: {
				default: "blackAlpha.200",
				_dark: "whiteAlpha.200"
			},
			raisedBg: {
				default: "#f6f6ff",
				_dark: "#18181b"
			}
		}
	},
	components: {
		Button,
		Heading,
		Badge,
		Divider,
		Tooltip: mergeThemeOverride(Tooltip, {
			baseStyle: {
				bg: "#1d1d22",
				"--tooltip-bg": "#1d1d22",
				_dark: {
					"--tooltip-bg": "#fff",
					bg: "bg.100"
				}
			}
		}),
		Link: mergeThemeOverride(Link, {
			variants: {
				link: {
					color: "sec",
					transition: "color .2s",
					_hover: {
						color: "#005395"
					},
					_dark: {
						_hover: {
							color: "#278adb"
						}
					},
					textDecor: "underline",
					fontWeight: 600
				}
			}
		})
	}
}) as ThemeOverride;

export default theme;
