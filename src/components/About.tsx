export default function About() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-8 bg-neutral-50 rounded-xl border border-neutral-200 flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">About This Site</h2>
        <p className="text-neutral-700 text-base md:text-lg">This minimalist job board is designed for clarity and focus. Browse jobs, filter by what matters, and find your next role with ease. Built with Next.js, TailwindCSS, and ShadCN/UI for a modern, clean experience.</p>
      </div>
      <div className="flex-1 flex justify-center">
        {/* Optionally add a subtle icon or illustration here */}
      </div>
    </section>
  );
}
