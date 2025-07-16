import { connectToDB } from '@/lib/mongodb';
import Booster from '@/models/Booster';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';


interface PageProps {
  params: {
    id: string;
  };
}

export default async function BoosterProfile({ params }: PageProps) {
  await connectToDB();
  const booster = await Booster.findById(params.id).lean();

  if (!booster) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Meet Our Verified Boosters 🚀
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {boosters.map((booster) => (
            <div
              key={booster._id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={booster.profileImage || '/default-avatar.png'}
                  alt={booster.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-800 text-center">
                  {booster.name}
                </h2>
                <p className="text-gray-600 text-sm text-center">
                  {booster.role} @ {booster.company}
                </p>
                <p className="text-gray-500 text-xs">
                  {booster.experience} yrs experience
                </p>
              </div>

              <div className="mt-4 flex justify-around text-sm text-gray-700">
                <div className="text-center">
                  <span className="block font-bold text-blue-600">
                    {booster.referralsMade}
                  </span>
                  Referrals
                </div>
                <div className="text-center">
                  <span className="block font-bold text-blue-600">
                    {booster.sessionsTaken}
                  </span>
                  Sessions
                </div>
              </div>

              <Link
  href={`/boosters/${booster._id}`}
  className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
>
  View Profile →
</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
