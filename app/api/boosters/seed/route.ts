import { connectToDB } from '@/lib/mongodb';
import Booster from '@/models/Booster';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDB();

  // 1) Wipe old mock data
  await Booster.deleteMany({});

  // 2) Insert fresh sample boosters
  const boosters = await Booster.insertMany([
    {
      name: 'Rahul Sharma',
      company: 'Amazon',
      role: 'SDE II',
      experience: 3,
      profileImage: 'https://i.pravatar.cc/120?img=3',
      referralsMade: 18,
      sessionsTaken: 9,
      linkedin: 'https://linkedin.com/in/rahulsharma',
      email: 'rahul.s@amazon.com',
    },
    {
      name: 'Ankita Verma',
      company: 'Google',
      role: 'Data Scientist',
      experience: 2,
      profileImage: 'https://i.pravatar.cc/120?img=10',
      referralsMade: 11,
      sessionsTaken: 6,
      linkedin: 'https://linkedin.com/in/ankitaverma',
      email: 'ankita@google.com',
    },
    {
      name: 'Karan Mehta',
      company: 'Microsoft',
      role: 'Product Manager',
      experience: 4,
      profileImage: 'https://i.pravatar.cc/120?img=32',
      referralsMade: 7,
      sessionsTaken: 4,
      linkedin: 'https://linkedin.com/in/karanmehta',
      email: 'karan@microsoft.com',
    },
    {
      name: 'Sneha Iyer',
      company: 'Uber',
      role: 'Backend Engineer',
      experience: 3,
      profileImage: 'https://i.pravatar.cc/120?img=47',
      referralsMade: 13,
      sessionsTaken: 8,
      linkedin: 'https://linkedin.com/in/snehaiyer',
      email: 'sneha@uber.com',
    },
    {
      name: 'Arjun Patel',
      company: 'Meta',
      role: 'ML Engineer',
      experience: 5,
      profileImage: 'https://i.pravatar.cc/120?img=15',
      referralsMade: 21,
      sessionsTaken: 12,
      linkedin: 'https://linkedin.com/in/arjunpatel',
      email: 'arjun@meta.com',
    },
  ]);

  return NextResponse.json({ message: 'Seeded successfully', boosters });
}
