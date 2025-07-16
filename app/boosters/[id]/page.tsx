import { connectToDB } from '@/lib/mongodb';
import Booster from '@/models/Booster';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BoosterParams {
  params: {
    id: string;
  };
}

export default async function BoosterProfile({ params }: BoosterParams) {
  await connectToDB();
  const booster = await Booster.findById(params.id).lean();

  if (!booster) return notFound();

  return (
    <main className="min-h-screen bg-white py-10 px-4 max-w-3xl mx-auto">
      <div className="bg-gray-100 p-6 rounded-2xl shadow-md text-center">
        <Image
  src={booster.profileImage || '/default-avatar.png'}
  alt={booster.name}
  width={100}
  height={100}
  className="rounded-full object-cover"
/>

        <h1 className="text-3xl font-bold mt-4">{booster.name}</h1>
        <p className="text-gray-700 text-lg">{booster.role} @ {booster.company}</p>
        <p className="text-gray-500 text-sm">{booster.experience} years experience</p>

        <div className="mt-6 flex justify-around text-sm text-gray-800">
          <div>
            <span className="text-xl font-semibold">{booster.referralsMade}</span><br />
            Referrals Made
          </div>
          <div>
            <span className="text-xl font-semibold">{booster.sessionsTaken}</span><br />
            1:1 Sessions
          </div>
        </div>

        <div className="mt-6 space-y-2 text-sm">
          {booster.email && (
            <p>
              📧 <a href={`mailto:${booster.email}`} className="text-blue-600 underline">{booster.email}</a>
            </p>
          )}
          {booster.linkedin && (
            <p>
              🔗 <a href={booster.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                LinkedIn Profile
              </a>
            </p>
          )}
        </div>

        <a
          href="/boosters"
          className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ← Back to All Boosters
        </a>
      </div>
    </main>
  );
}
