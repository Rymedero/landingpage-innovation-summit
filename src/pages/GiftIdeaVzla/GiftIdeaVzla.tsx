import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowLeft, ChevronDown, Lightbulb, Send, X } from "lucide-react";
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

	// Nuevos estados para Términos y Condiciones
	const [acceptedTerms, setAcceptedTerms] = useState(false);
	const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

	const sectorDropdownRef = useRef<HTMLDivElement | null>(null);
	const { isSubmitting, errorMessage, submitRegistration } = useGiftIdeaRegistration();

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

	// Deshabilitar scroll cuando el modal está abierto
	useEffect(() => {
		if (isTermsModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isTermsModalOpen]);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Verificación de seguridad adicional
		if (!acceptedTerms) return;

		const success = await submitRegistration(formData);

		if (success) {
			setSubmitted(true);
			setFormData(initialState);
			setAcceptedTerms(false); // Reiniciamos el checkbox
		} else {
			setSubmitted(false);
		}
	};

	return (
		<div className="relative min-h-screen w-full bg-[radial-gradient(circle_at_0%_0%,rgba(253,224,71,0.18),transparent_28%),radial-gradient(circle_at_95%_20%,rgba(14,165,233,0.14),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.96),rgba(2,6,23,1))]">
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
									Nombre <span className="text-red-400">*</span>
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
									Apellido <span className="text-red-400">*</span>
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
									Correo electrónico <span className="text-red-400">*</span>
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
									Sector <span className="text-red-400">*</span>
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
											className={`h-5 w-5 text-white/80 transition-transform duration-200 ${isSectorOpen ? "rotate-180" : "rotate-0"
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
									Ideas <span className="text-red-400">*</span>
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

							{/* --- SECCIÓN NUEVA: CHECKBOX DE TÉRMINOS --- */}
							<label className="flex items-start gap-3 sm:col-span-2 mt-2 cursor-pointer group">
								<div className="relative flex items-center pt-0.5">
									<input
										type="checkbox"
										required
										checked={acceptedTerms}
										onChange={(e) => setAcceptedTerms(e.target.checked)}
										className="peer h-5 w-5 appearance-none rounded border border-white/30 bg-slate-950/70 checked:border-primary checked:bg-primary transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 focus:ring-offset-slate-900"
									/>
									<svg
										className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-900 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</div>
								<span className="text-sm text-slate-300 leading-tight">
									He leído y acepto los{" "}
									<button
										type="button"
										onClick={() => setIsTermsModalOpen(true)}
										className="text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors"
									>
										términos y condiciones
									</button>
									<span className="text-red-400 ml-1">*</span>
								</span>
							</label>
							{/* ------------------------------------------- */}

						</div>

						<div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<p className="text-xs text-slate-300/90 max-w-xs">
								Al enviar, aceptas el tratamiento de datos para fines de evaluación del programa.
							</p>
							<button
								type="submit"
								disabled={isSubmitting || !acceptedTerms}
								className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 
        						${(!acceptedTerms || isSubmitting)
										? 'bg-slate-800 text-slate-400 border border-slate-700 cursor-not-allowed'
										: 'bg-primary text-slate-900 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(253,224,71,0.3)]'
									}`}
							>
								{isSubmitting ? "Enviando..." : "Enviar registro"}
								<Send className="h-4 w-4" aria-hidden="true" />
							</button>
						</div>

						{errorMessage ? (
							<p className="mt-4 rounded-xl border border-red-300/50 bg-red-400/10 px-4 py-3 text-sm text-red-200">
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

			{/* --- MODAL DE TÉRMINOS Y CONDICIONES --- */}
			{isTermsModalOpen && (
				<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
					{/* Backdrop oscuro con blur */}
					<div
						className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
						onClick={() => setIsTermsModalOpen(false)}
						aria-hidden="true"
					/>

					{/* Contenedor del Modal */}
					<div className="relative flex w-full max-w-2xl max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl animate-in fade-in zoom-in-95 duration-200">

						{/* Cabecera del Modal */}
						<div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
							<h3 className="text-xl font-semibold text-white">Términos y Condiciones Programa "Regálale una idea a Venezuela"</h3>
							<button
								type="button"
								onClick={() => setIsTermsModalOpen(false)}
								className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
								aria-label="Cerrar modal"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						{/* --- MODAL DE TÉRMINOS Y CONDICIONES --- */}
						{isTermsModalOpen && (
							<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
								{/* Backdrop oscuro con blur */}
								<div
									className="absolute inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
									onClick={() => setIsTermsModalOpen(false)}
									aria-hidden="true"
								/>

								{/* Contenedor del Modal */}
								<div className="relative flex w-full max-w-2xl max-h-[85vh] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl animate-in fade-in zoom-in-95 duration-200">

									{/* Cabecera del Modal */}
									<div className="flex items-center justify-between border-b border-white/10 px-8 py-5 bg-slate-900/50">
										<h3 className="text-lg font-bold text-white uppercase tracking-wider">Términos y Condiciones</h3>
										<button
											type="button"
											onClick={() => setIsTermsModalOpen(false)}
											className="rounded-full p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
										>
											<X className="h-5 w-5" />
										</button>
									</div>

									{/* Cuerpo del Modal (Scrollable) */}
									<div className="overflow-y-auto px-8 py-6 text-sm leading-relaxed text-slate-300 space-y-6 custom-scrollbar">
										<p className="font-medium text-slate-100 italic">
											Al enviar este formulario, usted declara que ha leído, entendido y aceptado los siguientes términos y condiciones:
										</p>

										<section>
											<h4 className="font-bold text-primary mb-2">1. Finalidad del formulario</h4>
											<p>El presente formulario tiene como objetivo recopilar ideas, propuestas y reflexiones de los participantes, con el fin de apoyar las actividades, iniciativas y contenidos asociados al <strong>InnovEYtion Summit 2026</strong>, así como promover el intercambio de ideas orientadas al desarrollo y fortalecimiento del ecosistema innovador en Venezuela.</p>
										</section>

										<section>
											<h4 className="font-bold text-primary mb-2">2. Autorización de uso de la información aportada</h4>
											<p>Usted autoriza de manera expresa, gratuita y no exclusiva al equipo organizador del <strong>InnovEYtion Summit 2026</strong> a utilizar, reproducir, adaptar, citar, difundir y/o publicar, total o parcialmente, la idea o contenido que comparta mediante este formulario.</p>
											<p className="mt-2">Dicha información podrá ser utilizada en medios digitales, impresos, audiovisuales o de cualquier otra naturaleza, únicamente con fines vinculados a la comunicación, divulgación, promoción o desarrollo de iniciativas relacionadas con el evento o programas derivados de él.</p>
										</section>

										<section>
											<h4 className="font-bold text-primary mb-2">3. Carácter no confidencial y renuncia a derechos exclusivos</h4>
											<p>Usted reconoce que la información que suministre mediante este formulario se realiza de forma voluntaria y con carácter <strong>no confidencial</strong>.</p>
											<p className="mt-2">Asimismo, entiende que el envío de su idea no constituye un registro de propiedad intelectual ni genera expectativa de protección, compensación económica, reconocimiento obligatorio, participación societaria, ni derecho alguno sobre iniciativas, proyectos o comunicaciones que pudieran derivarse de la misma.</p>
										</section>

										<section>
											<h4 className="font-bold text-primary mb-2">4. Veracidad y legitimidad del contenido enviado</h4>
											<p>Usted declara que la información suministrada es veraz y que tiene pleno derecho para compartirla. Se compromete a no remitir material ofensivo, ilícito, difamatorio, discriminatorio o que infrinja derechos de propiedad intelectual, privacidad o cualquier otro derecho de terceros.</p>
										</section>

										<section>
											<h4 className="font-bold text-primary mb-2">5. Protección y uso de datos personales</h4>
											<p>Los datos personales proporcionados serán tratados exclusivamente para fines organizativos, estadísticos y comunicacionales relacionados con el <strong>InnovEYtion Summit 2026</strong>. La información no será vendida ni cedida a terceros ajenos al evento, salvo obligación legal.</p>
										</section>

										<section>
											<h4 className="font-bold text-primary mb-2">6. Limitación de responsabilidad</h4>
											<p>El equipo organizador no será responsable por el uso indebido que terceros pudieran hacer de las ideas o contenidos publicados, una vez difundidos conforme a la autorización otorgada.</p>
										</section>

										<section>
											<h4 className="font-bold text-primary mb-2">7. Modificaciones a los términos</h4>
											<p>La organización se reserva el derecho de actualizar o modificar los presentes Términos y Condiciones en cualquier momento.</p>
										</section>

										<section className="border-t border-white/10 pt-4">
											<h4 className="font-bold text-white mb-2">8. Aceptación</h4>
											<p>Al marcar la casilla correspondiente y enviar este formulario, usted manifiesta su <strong>consentimiento pleno, expreso e informado</strong> respecto a todos los términos establecidos en este documento.</p>
										</section>
									</div>

									{/* Pie del Modal */}
									<div className="flex items-center justify-end gap-3 border-t border-white/10 bg-slate-900/80 px-8 py-5">
										<button
											type="button"
											onClick={() => setIsTermsModalOpen(false)}
											className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
										>
											Cerrar
										</button>
										<button
											type="button"
											onClick={() => {
												setAcceptedTerms(true);
												setIsTermsModalOpen(false);
											}}
											className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-slate-900 hover:scale-[1.02] transition-transform active:scale-95"
										>
											Entendido y Acepto
										</button>
									</div>
								</div>
							</div>
						)}

						{/* Pie del Modal */}
						<div className="flex items-center justify-end gap-3 border-t border-white/10 bg-slate-900/50 px-6 py-5">
							<button
								type="button"
								onClick={() => setIsTermsModalOpen(false)}
								className="rounded-xl px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
							>
								Cancelar
							</button>
							<button
								type="button"
								onClick={() => {
									setAcceptedTerms(true);
									setIsTermsModalOpen(false);
								}}
								className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5 hover:shadow-lg"
							>
								Aceptar términos
							</button>
						</div>
					</div>
				</div>
			)}
			{/* ------------------------------------------- */}
		</div>
	);
}

export default GiftIdeaVzla;