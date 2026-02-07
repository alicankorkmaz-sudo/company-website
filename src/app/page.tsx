const products = [
  {
    name: "Brekitz",
    tagline: "Create & manage tournaments in real-time",
    color: "brekitz",
    href: "https://brekitz.online",
    comingSoon: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z"
          fill="currentColor"
          opacity={0.3}
        />
        <path
          d="M8 8v4l4 3 4-3V8"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15v4"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          d="M8 19h8"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "SuperPets",
    tagline: "Transform your pet into a superhero with AI",
    color: "superpets",
    href: "https://superpets.fun",
    comingSoon: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6Z"
          fill="currentColor"
          opacity={0.3}
        />
        <path
          d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Quizzi",
    tagline: "Real-time 1v1 quiz duels",
    color: "quizzi",
    href: "#",
    comingSoon: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx={12} cy={12} r={9} fill="currentColor" opacity={0.3} />
        <path
          d="M9.5 9.5a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2.5 2-2.5 3.5"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <circle cx={12} cy={17} r={0.75} fill="currentColor" />
      </svg>
    ),
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
          Colossus Software
        </h1>
        <p className="mt-4 text-lg md:text-xl text-text-muted text-center max-w-md">
          We build mobile apps that people love
        </p>
      </section>

      {/* Products */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <span>Colossus Software LLC</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({
  name,
  tagline,
  color,
  href,
  comingSoon,
  icon,
}: (typeof products)[number]) {
  const colorClasses = {
    brekitz:
      "hover:border-brekitz/40 hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.15)] text-brekitz",
    superpets:
      "hover:border-superpets/40 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.15)] text-superpets",
    quizzi:
      "hover:border-quizzi/40 hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] text-quizzi",
  } as const;

  const classes = colorClasses[color];

  return (
    <a
      href={comingSoon ? undefined : href}
      target={comingSoon ? undefined : "_blank"}
      rel={comingSoon ? undefined : "noopener noreferrer"}
      className={`group block rounded-xl border border-border bg-surface p-6 transition-all duration-300 ${classes} ${
        comingSoon ? "cursor-default" : ""
      }`}
    >
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-semibold text-text">{name}</h2>
      <p className="mt-2 text-sm text-text-muted">{tagline}</p>
      <div className="mt-4">
        {comingSoon ? (
          <span className="inline-block rounded-full bg-border px-3 py-1 text-xs text-text-muted">
            Coming Soon
          </span>
        ) : (
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Visit &rarr;
          </span>
        )}
      </div>
    </a>
  );
}
