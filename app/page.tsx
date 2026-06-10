export default function Home() {
  const faqs = [
    {
      q: "How does it connect to my Shopify store?",
      a: "Via Shopify's webhook API. After subscribing, you'll get a setup guide to install the webhook in under 5 minutes — no coding required."
    },
    {
      q: "What does the optimizer actually change?",
      a: "It analyzes your cart abandonment patterns and suggests free-shipping thresholds, flat-rate adjustments, and zone-based rules. You approve every change before it goes live."
    },
    {
      q: "Do I need technical skills to use this?",
      a: "No. The dashboard is point-and-click. If you can read a bar chart, you can use ShipOptimizer."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Shipping Optimizer
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Losing Sales to{" "}
          <span className="text-[#58a6ff]">Bad Shipping Rules</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ShipOptimizer analyzes your cart abandonment data and automatically suggests shipping rule changes that reduce checkout friction — so more carts become orders.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. Works with any Shopify store doing $10k+/mo.</p>

        {/* Social proof strip */}
        <div className="mt-12 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">23%</p>
            <p className="text-xs text-[#8b949e] mt-1">avg. cart abandonment reduction</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">$4.2k</p>
            <p className="text-xs text-[#8b949e] mt-1">avg. monthly revenue recovered</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">5 min</p>
            <p className="text-xs text-[#8b949e] mt-1">setup via Shopify webhook</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center">
          <p className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-sm text-[#8b949e] mb-6">per month, billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            {[
              "Unlimited cart abandonment analysis",
              "AI-powered shipping rule suggestions",
              "One-click rule approval & rollback",
              "Weekly performance reports",
              "Shopify webhook integration",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#6e7681] mt-12">
          © {new Date().getFullYear()} ShipOptimizer. All rights reserved.
        </p>
      </section>
    </main>
  );
}
