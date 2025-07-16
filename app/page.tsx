export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-20">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          Land Your Dream Job with <br />
          <span className="text-blue-600">Verified Referrals</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          BoostMyReferral connects job seekers with industry professionals who offer real referrals, guidance, and mentorship.
        </p>

        <a
          href="/boosters"
          className="inline-block mt-8 bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          🚀 Explore Boosters
        </a>
      </section>

      {/* Optional Profile/Preview Section */}
      <section className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Meet Top Boosters
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Static previews (you can replace with dynamic later) */}
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={`https://i.pravatar.cc/100?img=${id * 2}`}
                alt="Booster"
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h3 className="mt-4 font-semibold text-lg text-gray-800">Booster #{id}</h3>
              <p className="text-gray-500 text-sm">Amazon · SDE</p>
              <p className="text-blue-600 text-sm mt-2">10 Referrals · 5 Sessions</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-32 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why BoostMyReferral?</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Most job seekers struggle to find referrals. Our platform bridges that gap by connecting you directly with verified professionals across top tech companies — no DMs, no gatekeeping.
        </p>
      </section>
    </div>
  );
}
