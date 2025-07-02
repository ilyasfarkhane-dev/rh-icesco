'use client';
// Minimal shadcn/ui-style carousel using radix primitives and Tailwind
import * as React from "react";

const images = [
	{
		src: "https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Helping hands",
	},
	{
		src: "https://images.unsplash.com/photo-1560821829-18a5fbb8b4ce?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Diverse group",
	},
	{
		src: "https://images.unsplash.com/photo-1627215750463-3386c8ed92ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Community support",
	},
];

export function Carousel() {
	const [current, setCurrent] = React.useState(0);
	const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
	const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

	return (
		<div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center bg-gray-50">
			<img
				src={images[current].src}
				alt={images[current].alt}
				className="object-cover object-center w-full h-full transition-all duration-500"
			/>
			<button
				onClick={prev}
				className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#18816b] rounded-full p-2 shadow"
				aria-label="Previous"
			>
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="15 18 9 12 15 6"></polyline>
				</svg>
			</button>
			<button
				onClick={next}
				className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#18816b] rounded-full p-2 shadow"
				aria-label="Next"
			>
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			</button>
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{images.map((_, i) => (
					<span
						key={i}
						className={`w-2 h-2 rounded-full ${
							i === current ? "bg-[#18816b]" : "bg-gray-300"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
