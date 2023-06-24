"use client";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";

import {
	WalletModalProvider,
	WalletDisconnectButton,
	WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const network = WalletAdapterNetwork.Devnet;
	const endpoint = useMemo(() => clusterApiUrl(network), [network]);

	const wallets = useMemo(
		() => [new UnsafeBurnerWalletAdapter()],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[network]
	);

	/*const WalletDisconnectButtonDynamic = dynamic(
		async () =>
			(await import("@solana/wallet-adapter-react-ui"))
				.WalletDisconnectButton,
		{ ssr: false }
	);
	const WalletMultiButtonDynamic = dynamic(
		async () =>
			(await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
		{ ssr: false }
	);*/

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletModalProvider>
					<div className="absolute right-4 top-4">
						<WalletMultiButton />
					</div>
					<main className="flex min-h-screen flex-col items-center justify-between">
						<div className="flex items-center justify-center w-full h-screen relative z-10">
							<button
								onClick={increment}
								className="rounded-full h-16 w-16 inline-block bg-red-500 text-white text-lg mx-2 hover:bg-red-600 transition-colors duration-200"
							>
								+1
							</button>
							<button
								onClick={decrement}
								className="rounded-full h-16 w-16 inline-block bg-blue-500 text-white text-lg mx-2 hover:bg-blue-600 transition-colors duration-200"
							>
								-1
							</button>
						</div>
						<span className="text-black text-center opacity-5 absolute z-0 align-text-bottom  block tracking-[-0.1em] leading-[0] top-[50vh] mr-[0.1em] text-[110vw] pointer-events-none">
							{count}
						</span>
					</main>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
}
