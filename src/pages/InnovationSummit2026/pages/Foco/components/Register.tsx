export function Register() {
	return (
		<section id="registro" className="w-full px-4 py-10 sm:px-6 lg:px-10 scroll-mt-28">
			<div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/20 bg-gradient-to-r from-primary/25 via-slate-900/80 to-primary/25 p-6 shadow-xl backdrop-blur-sm md:flex-row md:gap-6 md:p-8">
				<div className="text-center md:text-left">
					<h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
						Lleva la experiencia contigo y mantente al día
					</h3>
					<p className="mt-1 text-sm text-slate-200/90 sm:text-base">
						Descarga la app oficial para conocer novedades, agenda y contenidos del Summit.
					</p>
				</div>

				<a
					href="https://eur.cvent.me/VNgd1B?rt=1J9nIv61bkKqSQwRcsBphQ"
					className="btn btn-primary border-2 border-white px-6"
					aria-label="Descargar la app"
				>
					Descargar la app
				</a>
			</div>
		</section>
	);
}
