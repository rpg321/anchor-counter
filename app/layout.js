import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["400", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Anchor Counter",
	description:
		"A basic counter built using Anchor and Next.js, storing data on the Solana blockchain.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className + " overflow-hidden"}>
				{children}
			</body>
		</html>
	);
}
