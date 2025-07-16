import { connectToDB } from '@/lib/mongodb';
import Booster from '@/models/Booster';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDB();
    const boosters = await Booster.find({});
    return NextResponse.json(boosters);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch boosters' }, { status: 500 });
  }
}
