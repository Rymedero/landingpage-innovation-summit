import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowLeft, ChevronDown, Lightbulb, Send } from "lucide-react";
import { Link } from "react-router-dom";
import eyLogo from "../../assets/EY_Logo_Beam_STFWC_Horizontal_Small_RGB_White_Yellow_EN.png";
import { useGiftIdeaRegistration } from "./hooks/useGiftIdeaRegistration";

type FormState = {
	nombre: string;
	apellido: string;
	correoElectronico: string;
	sector: string;
	ideas: string;
	visionVocacionPais: string;
};

const initialState: FormState = {
	nombre: "",
	apellido: "",
	correoElectronico: "",
	sector: "",
	ideas: "",
	visionVocacionPais: "",
};

const sectorOptions = [
	"Turismo",
	"Agroindustria",
	"EdTech",
	"FinTech",
	"Servicios",
	"Oil & Gas",
	"Tecnología e Innovación",
	"Salud",
	"Manufactura",
	"Infraestructura",
];

function GiftIdeaVzla() {
	const [formData, setFormData] = useState<FormState>(initialState);
	const [submitted, setSubmitted] = useState(false);
	const [isSectorOpen, setIsSectorOpen] = useState(false);
	const sectorDropdownRef = useRef<HTMLDivElement | null>(null);
	const { isSubmitting, errorMessage, submitRegistration } =
		useGiftIdeaRegistration();

	useEffect(() => {
		const onClickOutside = (event: MouseEvent) => {
			if (!sectorDropdownRef.current) return;
			if (!sectorDropdownRef.current.contains(event.target as Node)) {
				setIsSectorOpen(false);
			}
		};

		document.addEventListener("mousedown", onClickOutside);
		return () => document.removeEventListener("mousedown", onClickOutside);
	}, []);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const success = await submitRegistration(formData);

		if (success) {
			setSubmitted(true);
			setFormData(initialState);
		} else {
			setSubmitted(false);
		}
	};

	return (
		<div className="min-h-screen w-full bg-[radial-gradient(circle_at_0%_0%,rgba(253,224,71,0.18),transparent_28%),radial-gradient(circle_at_95%_20%,rgba(14,165,233,0.14),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.96),rgba(2,6,23,1))]">
			<header
				id="site-navbar"
				className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md"
			>
				<div className="max-w-screen-xl mx-auto flex h-20 items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
					<div className="flex items-center gap-4">
						<img src={eyLogo} alt="EY" className="h-11 w-auto" />
						<h1 className="text-sm font-semibold uppercase tracking-[0.16em] text-white sm:text-base">
							Regálale una idea a <span className="text-primary">Venezuela</span>
						</h1>
					</div>

					<Link
						to="/summit2026-foco"
						className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-primary"
					>
						<ArrowLeft className="h-4 w-4" aria-hidden="true" />
						Volver
					</Link>
				</div>
			</header>

			<main className="max-w-screen-xl mx-auto px-6 pb-16 pt-32 sm:px-8 lg:px-12 xl:px-16">
				<section className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
					<div className="space-y-6">
						<p className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
							<Lightbulb className="h-4 w-4" aria-hidden="true" />
							Registro abierto
						</p>

						<h2 className="text-4xl tracking-tight font-bold leading-none">
							<span className="text-white">Convierte tu visión </span>
							<span className="text-primary">en acción</span>
						</h2>

						<p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
							Completa este formulario para postular tu propuesta. Queremos
							conocer tu idea, tu sector y la visión que tienes para el país.
						</p>

						<div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
							<p className="text-sm leading-6 text-slate-200/95">
								Tu información será revisada por el equipo de InnovEYtion Summit
								para identificar iniciativas con alto potencial de impacto.
							</p>
						</div>
					</div>

					<form
						onSubmit={onSubmit}
						className="rounded-3xl border border-white/15 bg-slate-900/60 p-6 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-8"
					>
						<div className="grid gap-5 sm:grid-cols-2">
							<label className="block">
								<span className="mb-2 block text-sm font-semibold text-white">
									Nombre
								</span>
								<input
									required
									type="text"
									value={formData.nombre}
									onChange={(event) =>
										setFormData((previous) => ({
											...previous,
											nombre: event.target.value,
										}))
									}
									className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
									placeholder="Tu nombre"
								/>
							</label>

							<label className="block">
								<span className="mb-2 block text-sm font-semibold text-white">
									Apellido
								</span>
								<input
									required
									type="text"
									value={formData.apellido}
									onChange={(event) =>
										setFormData((previous) => ({
											...previous,
											apellido: event.target.value,
										}))
									}
									className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
									placeholder="Tu apellido"
								/>
							</label>

							<label className="block sm:col-span-2">
								<span className="mb-2 block text-sm font-semibold text-white">
									Correo electrónico
								</span>
								<input
									required
									type="email"
									value={formData.correoElectronico}
									onChange={(event) =>
										setFormData((previous) => ({
											...previous,
											correoElectronico: event.target.value,
										}))
									}
									className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
									placeholder="nombre@correo.com"
								/>
							</label>

							<label className="block sm:col-span-2">
								<span className="mb-2 block text-sm font-semibold text-white">
									Sector
								</span>
								<div ref={sectorDropdownRef} className="relative">
									<input
										type="text"
										required
										readOnly
										value={formData.sector}
										className="sr-only"
										aria-hidden="true"
										tabIndex={-1}
									/>

									<button
										type="button"
										onClick={() => setIsSectorOpen((previous) => !previous)}
										className="flex w-full items-center justify-between rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-left text-sm text-white outline-none transition-colors hover:border-primary/60 focus:border-primary"
										aria-haspopup="listbox"
										aria-expanded={isSectorOpen}
									>
										<span className={formData.sector ? "text-white" : "text-slate-400"}>
											{formData.sector || "Selecciona un sector"}
										</span>
										<ChevronDown
											className={`h-5 w-5 text-white/80 transition-transform duration-200 ${
												isSectorOpen ? "rotate-180" : "rotate-0"
											}`}
											aria-hidden="true"
										/>
									</button>

									{isSectorOpen ? (
										<ul
											className="absolute left-0 right-0 top-full z-30 mt-2 max-h-56 overflow-y-auto rounded-xl border border-white/20 bg-slate-950/95 p-2 shadow-xl backdrop-blur-md"
											role="listbox"
										>
											{sectorOptions.map((sector) => (
												<li key={sector}>
													<button
														type="button"
														onClick={() => {
															setFormData((previous) => ({
																...previous,
																sector,
															}));
															setIsSectorOpen(false);
														}}
														className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-100 transition-colors hover:bg-white/10 hover:text-primary"
														role="option"
														aria-selected={formData.sector === sector}
													>
														{sector}
													</button>
												</li>
											))}
										</ul>
									) : null}
								</div>
							</label>

							<label className="block sm:col-span-2">
								<span className="mb-2 block text-sm font-semibold text-white">
									Ideas
								</span>
								<textarea
									required
									rows={3}
									value={formData.ideas}
									onChange={(event) =>
										setFormData((previous) => ({
											...previous,
											ideas: event.target.value,
										}))
									}
									className="w-full resize-y rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
									placeholder="Cuéntanos tu idea principal"
								/>
							</label>

							<label className="block sm:col-span-2">
								<span className="mb-2 block text-sm font-semibold text-white">
									Visión o vocación del país <span className="text-slate-400">(opcional)</span>
								</span>
								<textarea
									rows={4}
									value={formData.visionVocacionPais}
									onChange={(event) =>
										setFormData((previous) => ({
											...previous,
											visionVocacionPais: event.target.value,
										}))
									}
									className="w-full resize-y rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
									placeholder="Describe la visión o vocación de país que impulsa tu propuesta"
								/>
							</label>
						</div>

						<div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<p className="text-xs text-slate-300/90">
								Al enviar, aceptas el tratamiento de datos para fines de
								evaluación del programa.
							</p>
							<button
								type="submit"
								disabled={isSubmitting}
								className="btn btn-primary border-2 border-white px-6 transition-transform duration-300 hover:-translate-y-0.5"
							>
								{isSubmitting ? "Enviando..." : "Enviar registro"}
								<Send className="h-4 w-4" aria-hidden="true" />
							</button>
						</div>

						{errorMessage ? (
							<p className="mt-4 rounded-xl border border-red-300/50 bg-red-400/10 px-4 py-3 text-sm text-red-100">
								{errorMessage}
							</p>
						) : null}

						{submitted ? (
							<p className="mt-4 rounded-xl border border-primary/50 bg-primary/15 px-4 py-3 text-sm text-white">
								Registro enviado con éxito. Pronto te contactaremos.
							</p>
						) : null}
					</form>
				</section>
			</main>
		</div>
	);
}

export default GiftIdeaVzla;
