"use client";

export default function AboutReviews() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        {/* LEFT SUMMARY */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
            EXCELLENT
          </h3>

          {/* Stars */}
          <div className="mt-4 flex items-center gap-1 text-yellow-500 text-xl">
            ★★★★★
          </div>

          <p className="mt-3 text-sm text-zinc-500">Based on 86 reviews</p>

          <p className="mt-4 text-lg font-medium tracking-tight text-zinc-700">
            Google
          </p>
        </div>

        {/* REVIEWS */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {/* CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-200" />
              <div>
                <p className="text-sm font-medium text-zinc-900">
                  saintnicholas
                </p>
                <p className="text-xs text-zinc-500">12 months ago</p>
              </div>
            </div>

            <div className="mt-4 text-yellow-500 text-sm">★★★★★</div>

            <p className="mt-4 text-zinc-600 leading-relaxed">
              Amazing product and amazing customer service.
            </p>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-200" />
              <div>
                <p className="text-sm font-medium text-zinc-900">
                  Olajumoke Alabi
                </p>
                <p className="text-xs text-zinc-500">12 months ago</p>
              </div>
            </div>

            <div className="mt-4 text-yellow-500 text-sm">★★★★★</div>

            <p className="mt-4 text-zinc-600 leading-relaxed">
              Tested and trusted 💯
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
