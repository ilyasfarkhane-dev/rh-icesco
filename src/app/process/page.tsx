"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const steps = [
	{
		label: "CV retenu – en pré‑sélection",
		description: "Votre CV a été retenu ! Félicitations. Poste : Développeur Frontend.",
		content: (
			<div className="space-y-2">
				<div className="text-green-700 font-semibold">
					Félicitations, votre CV a été retenu en pré‑sélection !
				</div>
				<div className="text-gray-700">Poste : Développeur Frontend</div>
			</div>
		),
	},
	{
		label: "Entretien téléphonique : planifié",
		description: "Entretien téléphonique planifié.",
		content: (
			<div className="space-y-2">
				<div>Date : 12 juillet 2025</div>
				<div>Heure : 10h00</div>
				<div>
					Lien :{" "}
					<a
						href="https://teams.microsoft.com"
						className="text-[#0e7378] underline"
						target="_blank"
					>
						Rejoindre Teams
					</a>
				</div>
				<button className="mt-2 bg-[#0e7378] hover:bg-[#18816b] text-white px-4 py-2 rounded">
					Confirmer
				</button>
			</div>
		),
	},
	{
		label: "Entretien téléphonique – réalisé",
		description: "Résumé de l'entretien téléphonique.",
		content: (
			<div className="space-y-2">
				<div>
					Résumé : Discussion sur le parcours, motivations, compétences techniques.
				</div>
				<div className="text-gray-600">
					Prochaine étape en cours de planification…
				</div>
			</div>
		),
	},
	{
		label: "Entretien RH/manager : planifié",
		description: "Entretien RH/manager planifié.",
		content: (
			<div className="space-y-2">
				<div>Date : 15 juillet 2025</div>
				<div>Lieu : ICESCO, Rabat</div>
				<div>
					Lien visio :{" "}
					<a
						href="https://zoom.us"
						className="text-[#0e7378] underline"
						target="_blank"
					>
						Rejoindre Zoom
					</a>
				</div>
				<button className="mt-2 bg-[#0e7378] hover:bg-[#18816b] text-white px-4 py-2 rounded">
					Confirmer
				</button>
			</div>
		),
	},
	{
		label: "Entretien RH/manager – réalisé",
		description: "En cours d’évaluation finale.",
		content: (
			<div className="space-y-2">
				<div>En cours d’évaluation finale…</div>
				<div>Délai estimé : 3 jours ouvrés</div>
			</div>
		),
	},
	{
		label: "Statut : Validation interne de l’offre",
		description: "Validation interne de l’offre en cours.",
		content: (
			<div className="space-y-2">
				<div className="w-full bg-gray-200 rounded-full h-3">
					<div
						className="bg-[#0e7378] h-3 rounded-full"
						style={{ width: "60%" }}
					/>
				</div>
				<div className="text-gray-600">Aucune action requise.</div>
			</div>
		),
	},
	{
		label: "Offre envoyée",
		description: "Offre d'emploi envoyée.",
		content: (
			<div className="space-y-2">
				<a
					href="/offer.pdf"
					className="text-[#0e7378] underline"
					target="_blank"
				>
					Voir l’offre (PDF)
				</a>
				<div className="flex gap-2">
					<button className="bg-[#0e7378] hover:bg-[#18816b] text-white px-4 py-2 rounded">
						Accepter
					</button>
					<button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
						Refuser
					</button>
				</div>
			</div>
		),
	},
	{
		label: "Offre acceptée",
		description: "Checklist de documents à fournir.",
		content: (
			<div className="space-y-2">
				<div>Merci d’uploader les documents suivants :</div>
				<ul className="list-disc ml-6 text-gray-700">
					<li>
						Diplôme{" "}
						<input type="file" className="ml-2" />
					</li>
					<li>
						Carte d’identité{" "}
						<input type="file" className="ml-2" />
					</li>
					<li>
						CV <input type="file" className="ml-2" />
					</li>
				</ul>
			</div>
		),
	},
	{
		label: "Préparation d’arrivée",
		description: "Suivi des actions ICESCO.",
		content: (
			<div className="space-y-2">
				<div>Visa : en cours (prévu 20 juillet)</div>
				<div>Billet : réservé (départ 25 juillet)</div>
				<div>Chauffeur : prévu (prise en charge 25 juillet)</div>
			</div>
		),
	},
	{
		label: "Premier jour confirmé",
		description: "Bienvenue !",
		content: (
			<div className="space-y-2">
				<div className="text-green-700 font-semibold">
					Bienvenue chez ICESCO !
				</div>
				<div>
					Programme journée 1 : accueil, présentation équipe, visite locaux.
				</div>
				<div>
					Contacts utiles :{" "}
					<span className="text-[#0e7378]">hr@icesco.com</span>
				</div>
			</div>
		),
	},
];

export default function ProcessPage() {
	const router = useRouter();
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [selectedStep, setSelectedStep] = useState<number>(0);
	const [userInfo, setUserInfo] = useState<any>({});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const step = parseInt(localStorage.getItem("currentStep") || "0", 10);
			setCurrentStep(step);
			setSelectedStep(step);
			const info = localStorage.getItem("userInfo");
			if (info) setUserInfo(JSON.parse(info));
		}
	}, []);

	return (
		<div className="min-h-screen flex font-sans  py-12">
			{/* Sidebar */}
			<aside className="flex flex-col w-72 bg-white rounded-2xl shadow-xl border border-[#d1e6e7] p-6 mr-8 ml-30 h-fit self-center sticky top-12">
				<h2 className="text-lg font-bold text-[#0e7378] mb-6">
					Processus de Candidature
				</h2>
				<nav className="flex flex-col gap-2">
					{steps.map((step, i) => (
						<button
							key={step.label}
							onClick={() => setSelectedStep(i)}
							className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-left font-medium border border-transparent relative ${
								selectedStep === i
									? "bg-[#b2e6e8] text-[#0e7378] border-[#0e7378]"
									: i < currentStep
									? "bg-[#0e7378] text-white opacity-80"
									: "bg-[#e1f1f2] text-[#0e7378] opacity-60"
							}`}
						>
							{/* Show filled check for completed/current, empty for not completed */}
							{(i < currentStep || i === currentStep) ? (
								<span className="absolute left-2 top-1/2 -translate-y-1/2">
									<CheckCircle2
										className={`w-5 h-5 ${
											i === currentStep ? "text-[#0e7378]" : "text-green-500"
										}`}
									/>
								</span>
							) : (
								<span className="absolute left-2 top-1/2 -translate-y-1/2">
									<Circle className="w-5 h-5 text-gray-300" />
								</span>
							)}
							<span className="pl-7">{step.label}</span>
						</button>
					))}
				</nav>
			</aside>
			{/* Main Content */}
			<main className="bg-white rounded-2xl shadow-xl w-full max-w-2xl flex flex-col border border-[#d1e6e7] p-8 mx-auto">
				<h1 className="text-2xl font-bold text-[#0e7378] mb-8 text-center">
					{steps[selectedStep].label}
				</h1>
				<div className="text-[#0e7378] font-semibold mb-2">
					{steps[selectedStep].description}
				</div>
				<div className="mt-4">{steps[selectedStep].content}</div>
				<Button
					asChild
					variant="outline"
					className="border-[#0e7378] text-[#0e7378] mt-8 w-fit mx-auto"
				>
					<a href="/">Retour à l'accueil</a>
				</Button>
			</main>
		</div>
	);
}
