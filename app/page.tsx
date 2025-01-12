import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-xl duration-500 text-zinc-500 hover:text-zinc-300 mx-6"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-0 bg-white cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Jack Walmsley
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 max-w-2xl text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi, I'm Jack. I'm a software engineering co-op student at McMaster University. I've been working on {" "}
					<Link
					href="/projects/NEATJS/">
						<u>NEATJS</u>
					</Link>
					{" "}, a genetic ML algorithm in Javascript, and {" "}
					<Link
					href="/projects/duetomorrow/">
						<u>DueTomorrow</u>
					</Link>
					, a webapp for managing deadlines and school grades.
				</h2>
			</div>
		</div>
	);
}
