import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { Loader } from '@/components/loader';
import ScriptLoader from '@/components/script-loader';

const geistSans = Geist( {
	variable: '--font-geist-sans',
	subsets: [ 'latin' ],
} );

const geistMono = Geist_Mono( {
	variable: '--font-geist-mono',
	subsets: [ 'latin' ],
} );

export const metadata: Metadata = {
	title: 'The Glory Today - Show',
	description: 'Listen to the Awesome show by The Glory Today - Show',
};

export default function RootLayout( {
	children,
}: Readonly< {
	children: React.ReactNode;
} > ) {
	return (
		<html lang="en" className="no-js">
			<body className={ `${ geistSans.variable } ${ geistMono.variable } antialiased v-dark dsn-ajax` }>
				<div className="absolute inset-0">
					<img
						src="https://theglorytoday.com/bg2.jpg"
						alt="Event stage with dramatic lighting"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/90 via-[#0A0E1A]/75 to-[#0A0E1A]/95"></div>
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,118,45,0.15)_0%,transparent_60%)]"></div>
					<div className="absolute inset-0 bg-grid opacity-40"></div>
				</div>

				<main className="relative min-h-screen flex items-center justify-center px-6">
					<div className="text-center max-w-4xl">
						<img
							src="https://eu.chat-img.sintra.ai/942cdce3-cc97-4263-a621-93244f7a46a8/f04ccec4-afc0-4ac5-ac71-1ab8d91f66d9/The_Glory_Today_TGTS-02.png"
							className="w-72 mx-auto mb-12 bounce-slow"
						/>
						<div className="mb-6 text-yellow-400 uppercase sm:tracking-[0.1em]">
							Our new website is coming soon.
						</div>

						<h1 className="uppercase font-archivo font-black text-2xl sm:text-5xl md:text-7xl text-slate-300 leading-tight mb-8">
							Stay with us <br /> big things ahead
						</h1>

						<p className="text-slate-300 text-sm sm:text-xl max-w-2xl mx-auto mb-10">
							We're building a space where your voice matters, where stories change lives, and where real
							conversations happen.
						</p>

						<div className="sm:flex grid m-auto justify-center gap-4">
							<a
								href="https://www.theglory.today/"
								className="bg-gradient-to-r from-[#D4A843] to-[#E8762D] text-[#0A0E1A] px-4 justify-center sm:px-10 py-3.5 sm:py-4 rounded-full flex items-center font-bold text-sm sm:text-lg hover:opacity-90 transition-all hover:scale-105 animate-pulse-glow22 text-center"
							>
								Visit Our Event Pages
							</a>

							<a
								href="https://buymeacoffee.com/glorytoday"
								className="text-sm sm:text-lg sponsor-kid-link hover:scale-105 flex gap-4 px-8 sm:px-10 py-3.5 sm:py-4"
							>
								<span className="block text-sm sm:text-3xl">☕</span>
								<span className="block">Buy Me a Coffee</span>
							</a>
						</div>
						<div class="text-center py-4">
    <p class="text-white text-lg font-semibold mb-2">
        Connect with us
    </p>

    <div class="text-white space-y-1">
        <p>
            <span class="font-medium">Linktree:</span>
            <a
                href="https://linktr.ee/theglorytoday"
                target="_blank"
                class="text-blue-300 hover:text-blue-200 underline"
            >
                linktr.ee/theglorytoday
            </a>
        </p>

        <p>
            <span class="font-medium">Email:</span>
            <a
                href="mailto:question@theglory.today"
                class="text-blue-300 hover:text-blue-200 underline"
            >
                question@theglory.today
            </a>
        </p>
    </div>
</div>
					</div>
				</main>
			</body>
		</html>
	);
}
